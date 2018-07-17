import masontodayAPI from './masontodayAPI';

class Live25API {
    constructor() {
        this.urlprefix = 'api/25live';
    }

    async getData() {
        try {
            const response = await fetch(`${masontodayAPI.URL}${this.urlprefix}`);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Live25API();
