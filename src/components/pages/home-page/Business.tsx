import { useState } from "react";

interface Ingredient {
    id: number;
    name: string;
    unitCost: string; // cost per unit (e.g., per piece/gram)
    qty: string;      // quantity used
}

export const Business = () => {
    // Ingredient form
    const [name, setName] = useState("");
    const [unitCost, setUnitCost] = useState("");
    const [qty, setQty] = useState("");

    // Product sale form
    const [sellPrice, setSellPrice] = useState(""); // price per product
    const [unitsSold, setUnitsSold] = useState(""); // number of products sold

    // Ingredients list
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    // Add ingredient
    const addIngredient = () => {
        if (!name.trim() || !unitCost.trim() || !qty.trim()) return;
        setIngredients(prev => [
            ...prev,
            { id: Date.now(), name, unitCost, qty },
        ]);
        setName("");
        setUnitCost("");
        setQty("");
    };

    const deleteIngredient = (id: number) => {
        setIngredients(prev => prev.filter(i => i.id !== id));
    };

    // Totals
    const totalCost = ingredients.reduce((acc, ing) => {
        const cost = parseFloat(ing.unitCost) || 0;
        const q = parseFloat(ing.qty) || 0;
        return acc + cost * q;
    }, 0);

    const sales = (parseFloat(sellPrice) || 0) * (parseFloat(unitsSold) || 0);
    const profit = sales - totalCost;
    const profitMargin = totalCost > 0 ? (profit / totalCost) * 100 : 0;

    return (
        <div className="p-4 sm:p-8 max-w-3xl mx-auto bg-pink-100/95 rounded-2xl shadow-2xl space-y-6 font-['Great+Vibes'] shadow-red-700/80">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-red-500/70 text-center">
                Business Calculator
            </h1>

            {/* Ingredient form */}
            <div className="space-y-3 max-w-2xl">
                <h2 className="text-lg font-semibold text-red-500/70">Ingredients</h2>
                <div className="flex flex-col sm:flex-row gap-2 overflow-hidden">
                    <input
                        type="text"
                        value={name}
                        placeholder="Ingredient name?"
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 p-2 border rounded border-pink-500 shadow-inner shadow-red-500 focus:shadow-red-400 bg-red-200/70 "
                    />
                    <input
                        type="number"
                        value={unitCost}
                        placeholder={`${name} Cost:(₱)?  `}
                        onChange={(e) => setUnitCost(e.target.value)}
                        className="flex-1 p-2 border rounded border-pink-500 shadow-inner shadow-red-500 focus:shadow-red-400 bg-red-200/70 "
                    />
                    <input
                        type="number"
                        value={qty}
                        placeholder="Quantity?"
                        onChange={(e) => setQty(e.target.value)}
                        className="flex-1 p-2 border rounded border-pink-500 shadow-inner sm:max-w-24 shadow-red-500 focus:shadow-red-400 bg-red-200/70 "
                    />
                    <button
                        onClick={addIngredient}
                        disabled={!name.trim() || !unitCost.trim() || !qty.trim()}
                        className="flex-1 py-2 px-4 bg-red-500 shadow-md shadow-red-700/70 hover:bg-red-600 text-white rounded disabled:opacity-50 cursor-pointer"
                    >
                        Add
                    </button>
                </div>

                {/* Ingredient list */}
                <ul className="space-y-2">
                    {ingredients.map((ing) => {
                        const sub = (parseFloat(ing.unitCost) || 0) * (parseFloat(ing.qty) || 0);
                        return (
                            <li
                                key={ing.id}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-red-50 shadow-md shadow-red-700/50 rounded"
                            >
                                <div className="flex flex-row justify-around w-full md:justify-between space-x-4">
                                    <div className="w-full">
                                        <div className="flex flex-wrap justify-between gap-3">
                                            <span className="font-semibold">{ing.name}:</span>
                                            <span>Unit Cost: ₱{parseFloat(ing.unitCost || "0").toFixed(2)}</span>


                                        </div>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="font-semibold text-blue-700">
                                                Subtotal: ₱{sub.toFixed(2)}
                                            </span>
                                            <span>Qty: {ing.qty}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => deleteIngredient(ing.id)}
                                        className="text-red-600 hover:text-red-800 cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Product sale section */}
            <div className="space-y-3">
                <h2 className="text-lg font-semibold text-red-500/70">Product sale</h2>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="number"
                        value={sellPrice}
                        placeholder="Sell price per product (₱)"
                        onChange={(e) => setSellPrice(e.target.value)}
                        className="flex-1 p-2 border rounded border-pink-500 shadow-inner shadow-pink-300 focus:shadow-red-400 focus:bg-red-50 bg-pink-50"
                    />
                    <input
                        type="number"
                        value={unitsSold}
                        placeholder="Units sold(80 graham)"
                        onChange={(e) => setUnitsSold(e.target.value)}
                        className="flex-1 p-2 border rounded border-pink-500 shadow-inner shadow-pink-300 focus:shadow-red-400 focus:bg-red-50 bg-pink-50"
                    />
                </div>
            </div>

            {/* Totals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-blue-100 rounded border border-blue-400/70">
                    <div className="font-bold text-blue-700">Total Cost</div>
                    <div className="text-2xl">₱ {totalCost.toFixed(2)}</div>
                </div>
                <div className="p-3 bg-green-100 rounded border border-green-400/70">
                    <div className="font-bold text-green-700">Total Sales</div>
                    <div className="text-2xl">₱ {sales.toFixed(2)}</div>
                </div>
                <div className="p-3 bg-purple-100 rounded sm:col-span-2 border border-purple-400/70">
                    <div className="font-bold text-purple-700">Total Profit</div>
                    <div className="text-2xl">₱ {profit.toFixed(2)}</div>
                    <div className="text-sm text-gray-600">
                        Margin: {profitMargin.toFixed(2)}%
                    </div>
                </div>
            </div>
        </div>
    );
};
