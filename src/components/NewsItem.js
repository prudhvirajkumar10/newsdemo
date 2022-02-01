import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../utils/Fonts';
import {onNewsItemClick} from '../utils/Utils';
import {useDispatch} from 'react-redux';
import {REMOVE_BOOKMARK, SAVE_BOOKMARK} from '../redux/ActionConstants';

const NewsItem: () => Node = ({item}) => {
  const onPress = () => {
    onNewsItemClick(item);
  };
  const dispatch = useDispatch();
  const onBookmarkClicked = () => {
    if (item.isBookmark) {
      dispatch({type: REMOVE_BOOKMARK, item: item});
    } else {
      dispatch({type: SAVE_BOOKMARK, item: item});
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Card elevation={3} style={styles.sectionContainer}>
        <Card.Cover
          style={styles.sectionImage}
          source={{uri: item.urlToImage}}
        />
        <LinearGradient
          style={styles.sectionOverlay}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.7}}
          colors={['rgba(255,255,255,0)', 'rgba(0,0,0,0.8)']}
        />
        <Text style={styles.sectionTitle}>{item.author}</Text>
        <TouchableOpacity onPress={onBookmarkClicked}>
          <Image
            style={styles.bookmarkImage}
            source={
              item.isBookmark
                ? require('../assets/images/bookmarkselected.png')
                : require('../assets/images/bookmark.png')
            }
          />
        </TouchableOpacity>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    width: 280,
    borderRadius: 15,
  },
  sectionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bookmarkImage: {
    width: 18,
    height: 18,
    alignSelf: 'flex-end',
    tintColor: '#FFF',
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  sectionImage: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundSize: 'cover',
  },
  sectionTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: '#FFF',
    fontFamily: Fonts.notoSans.bold,
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 5,
  },
});

export default NewsItem;
