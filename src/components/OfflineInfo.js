import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Fonts} from '../utils/Fonts';

const OfflineInfo: () => Node = () => {
  return (
    <View style={styles.offlineView}>
      <Text style={styles.offlineText}>You're now Offline!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  offlineView: {
    marginTop: Platform.OS === 'android' ? 0 : 50,
    backgroundColor: '#F00',
    color: '#FFF',
  },
  offlineText: {
    color: '#FFF',
    fontFamily: Fonts.lato.regular,
    padding: 5,
    textAlign: 'center',
  },
});

export default OfflineInfo;
