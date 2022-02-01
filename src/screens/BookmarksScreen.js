import type {Node} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {fetchBookmarks, fetchNews} from '../redux/actions/Actions';
import NewsFullItem from '../components/NewsFullItem';
import {FlatList, StyleSheet, View} from 'react-native';
import {Fonts} from '../utils/Fonts';
import {GET_BOOKMARKS} from '../redux/ActionConstants';

const BookmarksScreen: () => Node = () => {
  const {bookMarks} = useSelector(
    state => ({
      bookMarks: state.newsReducer.bookMarks,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  const renderNewsFullItem = ({item}) => {
    return <NewsFullItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        data={bookMarks}
        renderItem={renderNewsFullItem}
        keyExtractor={({id}, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    height: '100%',
  },
  flatList: {
    marginTop: 15,
    paddingHorizontal: 24,
    width: '100%',
  },
  sectionChron: {
    fontSize: 12,
    color: '#7f7f7f',
    marginTop: 20,
    paddingHorizontal: 24,
    fontFamily: Fonts.lato.bold,
    alignSelf: 'center',
  },
});

export default BookmarksScreen;
