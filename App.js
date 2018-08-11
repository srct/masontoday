import { createStackNavigator } from 'react-navigation';

import { EventListPage, EventDetailsPage } from 'masontoday/src/components';

const App = createStackNavigator(
    {
        EventList: {
            screen: EventListPage,
        },
        EventDetails: {
            screen: EventDetailsPage,
        },
    },
    {
        headerMode: 'none',
    }
);

export default App;
