import React, {useEffect} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import type {Node} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Fonts} from '../utils/Fonts';
import NewsItem from '../components/NewsItem';
import NewsFullItem from '../components/NewsFullItem';
import OfflineInfo from '../components/OfflineInfo';
import {fetchNews} from '../redux/actions/Actions';
import {useNavigation} from '@react-navigation/native';
import {useIsConnected} from 'react-native-offline';

const HomeScreen: () => Node = () => {
  const {loading, newsData} = useSelector(
    state => ({
      loading: state.newsReducer.loading,
      newsData: state.newsReducer.newsData,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isConnected = useIsConnected();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const renderNewsItem = ({item}) => {
    return <NewsItem item={item} />;
  };
  const renderNewsFullItem = ({item}) => {
    return <NewsFullItem item={item} />;
  };
  return (
    <View style={styles.container}>
      {!isConnected ? <OfflineInfo /> : null}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
          <Image
            style={styles.headerImage}
            source={require('../assets/images/bookmarkselected.png')}
          />
        </TouchableOpacity>
      </View>
      {loading ? <ActivityIndicator size="large" /> : null}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionSubTitle}>Hi Prudhvi,</Text>
        <Text style={styles.sectionTitle}>
          Explore what's happening around the world
        </Text>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchImage}
            source={require('../assets/images/magnifying-glass.png')}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          data={newsData !== undefined ? newsData.slice(2, 10) : newsData}
          renderItem={renderNewsItem}
          keyExtractor={({id}, index) => index}
        />
        <View style={styles.subSectionContainer}>
          <Text style={styles.sectionHeader}>Latest News</Text>
          <Text style={styles.sectionChron}>More</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          data={newsData}
          renderItem={renderNewsFullItem}
          keyExtractor={({id}, index) => index}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
  },
  headerImage: {
    width: 24,
    height: 24,
    marginTop: Platform.OS === 'android' ? 20 : 70,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#000',
    marginEnd: 20,
    fontFamily: Fonts.lato.bold,
  },
  sectionSubTitle: {
    fontSize: 14,
    color: '#575757',
    marginEnd: 20,
    fontFamily: Fonts.lato.regular,
    marginBottom: 14,
  },
  searchContainer: {
    backgroundColor: '#ececec',
    marginTop: 16,
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
  },
  searchImage: {
    width: 20,
    height: 20,
    marginLeft: 14,
    alignSelf: 'center',
  },
  searchInput: {
    color: '#828282',
    fontFamily: Fonts.lato.regular,
    alignSelf: 'center',
    marginLeft: 8,
    width: '80%',
  },
  flatList: {
    marginTop: 15,
    paddingHorizontal: 24,
    width: '100%',
  },
  sectionHeader: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    marginEnd: 20,
    paddingHorizontal: 24,
    fontFamily: Fonts.lato.bold,
    alignSelf: 'center',
  },
  sectionChron: {
    fontSize: 12,
    color: '#7f7f7f',
    marginTop: 20,
    paddingHorizontal: 24,
    fontFamily: Fonts.lato.bold,
    alignSelf: 'center',
  },
  subSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
