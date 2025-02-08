export default class DateFactory {

    /**
     * Returns the current date in the user's local timezone.
     * Format: YYYY-MM-DD (ISO-like format)
     */
    static getLocalDateString() {
        const date = new Date();
        return date.toLocaleDateString("en-CA", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    }

    /**
     * Returns the current Date object in the user's local timezone.
     */
    static getTodayDate() {
        return new Date()
    }

    static createDateFromNumbers(year, month, day) {
        return new Date(year, month, day);
    }
}