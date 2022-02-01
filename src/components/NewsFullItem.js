import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

import {Fonts} from '../utils/Fonts';
import {timeSince} from '../utils/TimeUtils';
import {onNewsItemClick} from '../utils/Utils';
import {useDispatch} from 'react-redux';
import {REMOVE_BOOKMARK, SAVE_BOOKMARK} from '../redux/ActionConstants';

const NewsFullItem: () => Node = ({item}) => {
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
    <TouchableOpacity
      onPress={onPress}
      elevation={3}
      style={styles.sectionContainer}>
      <View style={styles.imageContainer}>
        <Card.Cover
          style={styles.sectionImage}
          source={{uri: item.urlToImage}}
        />
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>
          {item.title.length >= 75
            ? item.title.substring(0, 75) + '...'
            : item.title}
        </Text>
        <Text style={styles.sectionSubTitle}>
          {timeSince(item.publishedAt)} ago
        </Text>
        <TouchableOpacity
          style={styles.bookmarkImage}
          onPress={onBookmarkClicked}>
          <Image
            style={styles.bookmarkImage}
            source={
              item.isBookmark
                ? require('../assets/images/bookmarkselected.png')
                : require('../assets/images/bookmark.png')
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
    marginEnd: 24,
    width: '100%',
    borderRadius: 10,
  },
  imageContainer: {
    width: '30%',
    height: 120,
    alignSelf: 'flex-start',
    backgroundColor: '#000',
    borderRadius: 10,
    zIndex: 200,
    elevation: 5,
  },
  sectionImage: {
    opacity: 0.8,
    height: 120,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundSize: 'cover',
  },
  sectionContent: {
    width: '80%',
    alignSelf: 'flex-end',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    position: 'absolute',
    end: 0,
    bottom: 2,
    zIndex: 100,
  },
  sectionTitle: {
    color: '#000',
    fontFamily: Fonts.lato.bold,
    fontSize: 16,
    marginStart: 50,
    marginTop: 10,
    marginEnd: 5,
  },
  sectionSubTitle: {
    color: '#757575',
    fontFamily: Fonts.lato.regular,
    fontSize: 12,
    marginStart: 50,
    marginBottom: 5,
  },
  bookmarkImage: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default NewsFullItem;
