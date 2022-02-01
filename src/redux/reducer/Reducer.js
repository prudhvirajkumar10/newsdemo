import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  SAVE_BOOKMARK,
  GET_BOOKMARKS,
  REMOVE_BOOKMARK,
} from '../ActionConstants';
import {offlineActionTypes} from 'react-native-offline';

const initialState = {
  loading: false,
  isConnected: true,
  newsData: [],
  bookMarks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_START:
      return {
        ...state,
        loading: action.loading,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        newsData: action.newsData,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        loading: action.loading,
        newsData: [],
      };
    case SAVE_BOOKMARK:
      let savedItem = action.item;
      savedItem.isBookmark = true;
      return {
        ...state,
        bookMarks: [...state.bookMarks, savedItem],
        newsData: [...state.newsData, savedItem],
      };
    case REMOVE_BOOKMARK:
      let removedItem = action.item;
      removedItem.isBookmark = false;
      let bookMarks = state.bookMarks.filter(
        bookmarkItem => bookmarkItem.url !== action.item.url,
      );
      let removedData = [...state.newsData, removedItem];
      return {
        ...state,
        bookMarks: bookMarks,
        newsData: removedData,
      };
    case GET_BOOKMARKS:
      return {
        ...state,
        bookMarks: state.bookMarks,
      };
    default:
      return state;
  }
};

export default reducer;
