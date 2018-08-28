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
        mode: 'modal',
        headerMode: 'none',
    }
);

export default App;
