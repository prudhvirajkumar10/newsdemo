import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Alert, Linking} from 'react-native';

export const onNewsItemClick = async item => {
  try {
    const isAvailable = await InAppBrowser.isAvailable();
    if (isAvailable) {
      InAppBrowser.open(item.url, {
        dismissButtonStyle: 'Cancel',
        preferredBarTintColor: 'black',
        preferredControlTintColor: 'white',
        showTitle: true,
        toolbarColor: 'black',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: true,
      });
    } else {
      Linking.openURL(item.url);
    }
  } catch (e) {
    Alert.alert(e.message);
  }
};
