export function convertDateTime(datetime: string){
    // example string: 2024-12-01T23:59
    let date = datetime.split("T")[0].split("-")
    let time = datetime.split("T")[1]
    console.log(date,time)
    return `${monthNumberToName(date[1])} ${date[2]} at ${convert24to12hour(time)}`
}

export function monthNumberToName(monthString: string): string {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let month = parseInt(monthString);

    if (month < 1 || month > 12) {
        throw new Error("Invalid month number. Must be between 1 and 12.");
    }

    return monthNames[month - 1];
}

export function convert24to12hour(timeString: string) {
    let hour = parseInt(timeString.split(":")[0])
    let minute = parseInt(timeString.split(":")[1])
    let period: string

    if (hour > 12 && hour < 24) {
        hour = hour - 12;
        period = "pm"
    } else {
        period = "am"
    }

    return `${hour}:${minute}${period}`;
}