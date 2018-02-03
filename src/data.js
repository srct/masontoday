export async function fetchData() {
    // Fetches data from api
    try {
        let response = await fetch('http://34.234.214.232');
        //console.warn(response);
        let responseJson = response.json();
        return responseJson;
    } catch (error) {
        return;
    }
}

export function filterDataIntoDays(data) {
    let days = [];
    data.forEach(event => {
        const daysAlreadyWithDate = days.filter(day => {
            return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
        });
        // add the day to the days if it's not already there
        if (daysAlreadyWithDate.length === 0) {
            days.push({ dayofweek: event.dayofweek, dayofmonth: event.dayofmonth });
        }
    });
    days.forEach(day => {
        day.events = data.filter(event => {
            return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
        });
    });
    return days;
}
