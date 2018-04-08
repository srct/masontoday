import { fetchData, filterDataIntoDays, formatTime, formatDescription } from '../src/data';
import { payload } from '../sampleData';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Filters Data Into Days', () => {
    expect(filterDataIntoDays(payload)).toEqual([
        {
            dayofmonth: '28',
            dayofweek: 'Tuesday',
            events: [
                {
                    dayofmonth: '28',
                    dayofweek: 'Tuesday',
                    description: 'a meeting for MasonSRCT',
                    id: '286116240',
                    location: ["Well.. it's somewhere!"],
                    month: 'March',
                    timestart: 480,
                    timestop: 1380,
                    title: 'Srct meeting',
                    year: '2018',
                },
                {
                    dayofmonth: '28',
                    dayofweek: 'Tuesday',
                    description: 'Undergraduate students only ',
                    id: '284761355',
                    location: ['Not Provided'],
                    month: 'March',
                    timestart: 720,
                    timestop: 1439,
                    title: 'Selective Withdrawal Period',
                    year: '2018',
                },
            ],
        },
    ]);
});
it('Formats Time', () => {
    expect(formatTime(480)).toBe('8:00 AM');
    expect(formatTime(720)).toBe('12:00 PM');
    expect(formatTime(1439)).toBe('11:59 PM');
    expect(formatTime(660)).toBe('11:00 AM');
    expect(formatTime(840)).toBe('2:00 PM');
});
it('Formats Description', () => {
    expect(formatDescription('srct')).toBe('srct');
    expect(formatDescription('srct?')).toBe('srct?');
    expect(
        formatDescription(
            'srctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrct'
        )
    ).toBe(
        'srctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrctsrct...'
    );
});
