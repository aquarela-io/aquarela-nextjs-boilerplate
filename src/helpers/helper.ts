class DateHelper {
    get getYear(): number | string {
        const year = new Date()
        return year.getFullYear()
    }
}

export { DateHelper }
