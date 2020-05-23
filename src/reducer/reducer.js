
import { API_REQUEST, API_SUCCESS, API_FAILURE, API_LOADING } from '../action/action';

const initialState = {
  catImageUrl: '',
  quoteText: '',
  fetching: false,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {

    case API_REQUEST:
      return { ...state, fetching: true, loading: false,error: null };
    case API_SUCCESS:
      const { catImageUrl, quoteText } = action.payload;
      return { ...state, fetching: false, error: null, loading: false, catImageUrl, quoteText };
    case API_FAILURE:
      return { ...state, fetching: false, error: action.error };
    case API_LOADING:
      return { ...state, loading: action.loading }
    default:
      return state;
  }
};
export default reducer;