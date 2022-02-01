/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as NewsProvider} from 'react-redux';
import {newsStore} from './src/redux/store/Store';
import {NetworkProvider} from 'react-native-offline';

const NewsApp = () => {
  return (
    <NewsProvider store={newsStore}>
      <NetworkProvider>
        <App />
      </NetworkProvider>
    </NewsProvider>
  );
};

AppRegistry.registerComponent(appName, () => NewsApp);
