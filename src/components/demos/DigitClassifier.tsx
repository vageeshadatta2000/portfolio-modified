import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import * as tf from '@tensorflow/tfjs';

interface Prediction {
    digit: number;
    confidence: number;
}

export const DigitClassifier: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [model, setModel] = useState<tf.LayersModel | null>(null);
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [topPrediction, setTopPrediction] = useState<Prediction | null>(null);

    // Initialize canvas and load model
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Load or create a simple model
        loadModel();
    }, []);

    const loadModel = async () => {
        try {
            // Create a simple CNN model for MNIST
            const model = tf.sequential();

            model.add(tf.layers.conv2d({
                inputShape: [28, 28, 1],
                kernelSize: 3,
                filters: 16,
                activation: 'relu'
            }));
            model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
            model.add(tf.layers.conv2d({
                kernelSize: 3,
                filters: 32,
                activation: 'relu'
            }));
            model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
            model.add(tf.layers.flatten());
            model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
            model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

            model.compile({
                optimizer: 'adam',
                loss: 'categoricalCrossentropy',
                metrics: ['accuracy']
            });

            // Initialize with random weights (in production, you'd load trained weights)
            setModel(model);
            setIsLoading(false);
        } catch (error) {
            console.error('Error loading model:', error);
            setIsLoading(false);
        }
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        if ('touches' in e) {
            return {
                x: (e.touches[0].clientX - rect.left) * scaleX,
                y: (e.touches[0].clientY - rect.top) * scaleY
            };
        }
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setIsDrawing(true);
        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        if (!isDrawing) return;

        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#ffffff';
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        predict();
    };

    const predict = useCallback(async () => {
        const canvas = canvasRef.current;
        if (!canvas || !model) return;

        // Get image data and resize to 28x28
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Create a temporary canvas for resizing
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 28;
        tempCanvas.height = 28;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;

        // Draw resized image
        tempCtx.drawImage(canvas, 0, 0, 28, 28);
        const imageData = tempCtx.getImageData(0, 0, 28, 28);

        // Convert to tensor
        const tensor = tf.tidy(() => {
            // Get grayscale values
            const values: number[] = [];
            for (let i = 0; i < imageData.data.length; i += 4) {
                // Use red channel (since we draw in white, all channels are same)
                values.push(imageData.data[i] / 255);
            }

            return tf.tensor4d(values, [1, 28, 28, 1]);
        });

        // Make prediction
        const prediction = model.predict(tensor) as tf.Tensor;
        const probabilities = await prediction.data();

        // Create predictions array
        const preds: Prediction[] = Array.from(probabilities).map((conf, digit) => ({
            digit,
            confidence: conf * 100
        })).sort((a, b) => b.confidence - a.confidence);

        setPredictions(preds);
        setTopPrediction(preds[0]);

        // Cleanup
        tensor.dispose();
        prediction.dispose();
    }, [model]);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setPredictions([]);
        setTopPrediction(null);
    };

    return (
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Canvas Section */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                        Draw a digit (0-9)
                    </h4>
                    <div className="relative">
                        <canvas
                            ref={canvasRef}
                            width={280}
                            height={280}
                            className="w-full max-w-[280px] aspect-square rounded-xl cursor-crosshair touch-none border-2 border-slate-300 dark:border-slate-600"
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onTouchStart={startDrawing}
                            onTouchMove={draw}
                            onTouchEnd={stopDrawing}
                        />
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                                <div className="text-white text-sm">Loading model...</div>
                            </div>
                        )}
                    </div>
                    <motion.button
                        onClick={clearCanvas}
                        className="mt-4 px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Clear
                    </motion.button>
                </div>

                {/* Predictions Section */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                        Prediction
                    </h4>

                    {topPrediction && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center mb-6"
                        >
                            <div className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                {topPrediction.digit}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {topPrediction.confidence.toFixed(1)}% confidence
                            </div>
                        </motion.div>
                    )}

                    {/* Confidence bars */}
                    <div className="space-y-2">
                        {predictions.slice(0, 5).map((pred, index) => (
                            <motion.div
                                key={pred.digit}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3"
                            >
                                <span className="w-4 text-sm font-mono text-slate-600 dark:text-slate-400">
                                    {pred.digit}
                                </span>
                                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pred.confidence}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <span className="w-12 text-xs text-right text-slate-500 dark:text-slate-400">
                                    {pred.confidence.toFixed(1)}%
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {!topPrediction && (
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Draw a digit on the canvas to see predictions
                        </p>
                    )}
                </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                * This demo runs a CNN model entirely in your browser using TensorFlow.js.
                The model architecture is similar to LeNet-5 used for MNIST classification.
            </p>
        </div>
    );
};
