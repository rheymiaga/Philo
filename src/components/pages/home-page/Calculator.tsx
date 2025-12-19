import React, { useState } from "react";
import { add, subtract, multiply, divide } from "../../../utils/Math";

export const Calculator: React.FC = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    const handleOperation = (op: "add" | "subtract" | "multiply" | "divide" | "clear") => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResult(null);
            return;
        }

        switch (op) {
            case "add":
                setResult(add(a, b));

                break;
            case "subtract":
                setResult(subtract(a, b));

                break;
            case "multiply":
                setResult(multiply(a, b));

                break;
            case "divide":
                setResult(divide(a, b));

                break;
            case "clear":
                setNum1("")
                setNum2("")
        }
    };

    return (
        <div className=" flex flex-col items-center justify-center bg-red-200/90 font-['Great+Vibes'] rounded-2xl p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-red-500/70">Calculator</h1>

            <div className="flex items-center justify-start flex-col md:flex-row gap-4 mb-4">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    className="px-3 py-2 border border-red-600 shadow-inner shadow-red-500/50 rounded"
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    className="px-3 py-2 border border-red-600 shadow-inner shadow-red-500/50 rounded"
                    placeholder="Enter second number"
                />
            </div>

            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => handleOperation("add")}
                    className="px-2 py-1 bg-pink-500 text-white rounded cursor-pointer"
                >
                    Add
                </button>
                <button
                    onClick={() => handleOperation("subtract")}
                    className="px-2 sm:px-4 sm:py-2 py-1 bg-pink-500 text-white rounded cursor-pointer"
                >
                    Subtract
                </button>
                <button
                    onClick={() => handleOperation("multiply")}
                    className="px-2 py-1 bg-pink-500 text-white rounded cursor-pointer"
                >
                    Multiply
                </button>
                <button
                    onClick={() => handleOperation("divide")}
                    className="px-2 py-1 bg-pink-500 text-white rounded cursor-pointer"
                >
                    Divide
                </button>
            </div>

            {result !== null && (
                <div className="text-lg font-semibold flex items-center gap-2">
                    <button
                        onClick={() => handleOperation("clear")}
                        className="px-4 py-2 bg-pink-500 text-white rounded cursor-pointer"
                    >
                        Clear Numbers
                    </button>
                    Result: <span className="text-pink-600">{result.toFixed(2)}</span>
                </div>
            )}
        </div>
    );
};


