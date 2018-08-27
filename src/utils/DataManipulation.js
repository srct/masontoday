import { AsyncStorage } from 'react-native';
import { filter } from 'lodash';
import moment from 'moment';

const QUALITIES = ['excellent', 'verygood', 'good', 'okay'];

class DataManipulation {
    formatData(data, qualities = QUALITIES) {
        if (!data) return;

        // removing events that are of the incorrect quality
        for (let date of data) {
            date.data = filter(date.data, event => qualities.includes(event.quality));
        }

        // removing days before current days
        const now = moment();
        let formattedData = data;
        if (moment(data[0].datetime).isBefore(now, 'day')) {
            formattedData = [];

            for (let date of data) {
                if (moment(date.datetime).isSameOrAfter(now, 'day')) {
                    formattedData.push(date);
                }
            }
        }
        return formattedData;
    }

    formatTime(minutesFromMidnight) {
        let hours = Math.floor(minutesFromMidnight / 60);
        let post = '';
        if (hours < 12) {
            post = 'AM';
        } else {
            post = 'PM';
            if (hours > 12) hours = hours % 12;
        }
        const minutes = minutesFromMidnight % 60;
        return `${hours}:${minutes == 0 ? '00' : minutes} ${post}`;
    }

    async getStored25Live() {
        try {
            const data = JSON.parse(await AsyncStorage.getItem('masontoday:25live'));
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async setStored25Live(data) {
        try {
            await AsyncStorage.setItem('masontoday:25live', JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export default new DataManipulation();
