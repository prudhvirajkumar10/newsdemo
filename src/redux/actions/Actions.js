import {
  CHANGE_CONNECTION_STATUS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  GET_BOOKMARKS,
} from '../ActionConstants';

export const fetchNews = () => {
  return dispatch => {
    dispatch({type: FETCH_NEWS_START, loading: true});
    fetch(
      'https://candidate-test-data-moengage.s3.amazonaws.com/Android/news-api-feed/staticResponse.json',
    )
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_NEWS_SUCCESS,
          loading: false,
          newsData: data.articles,
        });
      })
      .catch(error =>
        dispatch({type: FETCH_NEWS_ERROR, loading: false, newsData: []}),
      );
  };
};

export const fetchBookmarks = () => {
  return {type: GET_BOOKMARKS};
};
