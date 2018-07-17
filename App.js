import { createStackNavigator } from 'react-navigation';

import { EventList } from 'masontoday/src/components';

const App = createStackNavigator(
    {
        Home: {
            screen: EventList,
        },
    },
    {
        headerMode: 'none',
    }
);

export default App;
