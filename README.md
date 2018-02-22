# Masontoday

[![Build Status](https://travis-ci.org/zosman1/masontoday.svg?branch=master)](https://travis-ci.org/zosman1/masontoday)
[![dependencies Status](https://david-dm.org/zosman1/masontoday/status.svg)](https://david-dm.org/zosman1/masontoday)
[![devDependencies Status](https://david-dm.org/zosman1/masontoday/dev-status.svg)](https://david-dm.org/zosman1/masontoday?type=dev)

## Getting Ready

* Please Follow `Building Projects With Native Code` in [this guide](https://facebook.github.io/react-native/docs/getting-started.html) for installing and setting up node, npm, and everything you need to have installed before getting started.

* We use yarn in this project to standardize dependencies.
  Yarn can be installed [here](https://yarnpkg.com/en/docs/install)

## Setup

Once you clone the repository, use `yarn install` to install all dependencies into `/node_modules`

## Running

### iOS

> Note: IOS can only be run on the macOS operating system

> Note: Xcode must be installed

* `yarn run ios`

This command will start the build, open a ios simulator, and start the react packager.

After this command starts up the app any changes made locally can be shown by using `cmd r` to refresh the app.

### Android

This is a bit more complicated than iOS as the command does not automatically bring up a simulator.

Thankfully react native provides a very elaborate description of how to set that up [here](https://facebook.github.io/react-native/docs/getting-started.html) under `Building Projects with Native Code`

* `yarn run android`

This command will start the build, and connect to the adb debugger.
