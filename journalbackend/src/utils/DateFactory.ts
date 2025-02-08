export default class DateFactory {
    
    convertStringToDateObject(dateString: string) {
        const [year, month, day] = dateString.split("-").map(Number);
        const date = new Date(year, month - 1, day); // Correct local date
        return date
    }
    
}