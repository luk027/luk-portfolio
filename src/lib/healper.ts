export function getYearsWithMonths(inputDate: string): number {
    const start = new Date(inputDate);
    const today = new Date();

    // Total months difference
    let months =
        (today.getFullYear() - start.getFullYear()) * 12 +
        (today.getMonth() - start.getMonth());

    // Adjust if current day is before the start day
    if (today.getDate() < start.getDate()) {
        months--;
    }

    // Convert months to decimal years
    const years = months / 12;

    return parseFloat(years.toFixed(1)); // 1 decimal like 1.5, 4.8
}