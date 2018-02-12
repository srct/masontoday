const { Navigation } = require('react-native-navigation');
const App = require('./App');
function registerScreens() {
    Navigation.registerComponent('navigation.masontoday.homescreen', () => App);
}

module.exports = {
    registerScreens,
};
