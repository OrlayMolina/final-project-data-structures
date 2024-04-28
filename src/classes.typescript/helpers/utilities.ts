/**
 * Formats a numerical quantity as a monetary value in US dollars.
 * @param quantity The numerical quantity to be formatted as money.
 * @returns A string representing the formatted amount in USD currency format.
 */

export const formatMoney = (quantity: number): string => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}