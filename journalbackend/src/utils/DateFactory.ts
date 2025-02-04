export default class DateFactory {
    constructor() {

    }

    getTodayDate() {
        return new Date()
    }

    /*
        Has to be a Date() class that is passed in
    */
   // FIXME: Eventually this has to account for user time zone
    getDateString(date: Date) {
        return date.toLocaleDateString("en-CA"); 
    }

    convertStringToDateObject(dateString: string) {
        return new Date(dateString + 'T00:00:00');
    }
}