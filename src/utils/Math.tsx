export function toCents(amount: number): number {
    return Math.round(amount * 100);
}

// Add two amounts
export function add(a: number, b: number): number {
    return (toCents(a) + toCents(b)) / 100;
}

// Subtract two amounts
export function subtract(a: number, b: number): number {
    return (toCents(a) - toCents(b)) / 100;
}

// Multiply
export function multiply(a: number, b: number): number {
    return (toCents(a) * b) / 100;
}

// Divide
export function divide(a: number, b: number): number {
    return toCents(a) / toCents(b);
}