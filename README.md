# Masontoday

[![Build Status](https://travis-ci.org/srct/masontoday.svg?branch=master)](https://travis-ci.org/srct/masontoday)
[![dependencies Status](https://david-dm.org/srct/masontoday/status.svg)](https://david-dm.org/srct/masontoday)
[![devDependencies Status](https://david-dm.org/srct/masontoday/dev-status.svg)](https://david-dm.org/srct/masontoday?type=dev)

## Getting Ready

*   Please Follow `Building Projects With Native Code` in [this guide](https://facebook.github.io/react-native/docs/getting-started.html) for installing and setting up node, npm, and everything you need to have installed before getting started.

*   We use yarn in this project to standardize dependencies.
    Yarn can be installed [here](https://yarnpkg.com/en/docs/install)

And you're done!

## Setup

Once you clone the repository, use `yarn install` to install all dependencies into `/node_modules`

## Running

### iOS

> Note: iOS can only be run on the macOS operating system

> Note: Xcode must be installed

*   `yarn run ios`

This command will start the build, open a iOS simulator, and start the react packager.

After this command starts up the app any changes made locally can be shown by using `cmd r` to refresh the app.

### Android

This is a bit more complicated than iOS as the command does not automatically bring up a simulator.

Thankfully react native provides a very elaborate description of how to set that up [here](https://facebook.github.io/react-native/docs/getting-started.html) under `Building Projects with Native Code`

*   `yarn run android`

This command will start the build, and connect to the adb debugger.

## Contributing

If you would like to contribute to Mason Today, please join the [#masontoday-mobile channel](https://srct.slack.com/messages/masontoday-mobile/details/)
in SRCT's [Slack Group](https://srct.slack.com) and say hi. This is where most discussion about the project takes place.
