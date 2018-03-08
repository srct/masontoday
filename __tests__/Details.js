import 'react-native';
import React from 'react';
import { Details } from '../src/screens/Details';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let event = {
    dayofweek: 'Thursday',
    timestart: 0,
    timestop: 1000,
    location: ['Not Provided'],
    title: 'A Test Event',
    description: 'Testing... TESTING',
    month: 'January',
    year: '2018',
    id: '000000000',
    dayofmonth: '1',
};

it('renders correctly', () => {
    const tree = renderer.create(<Details event={event} />);
});
