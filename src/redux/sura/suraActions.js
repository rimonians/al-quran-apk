import axios from "axios";
import {
  FETCH_SURA_REQUEST,
  FETCH_SURA_SUCCESS,
  FETCH_SURA_FAILURE,
  FILTER_SURA,
  SEARCH_SURA,
} from "./suraTypes";

export const fetchSuraRequest = () => {
  return {
    type: FETCH_SURA_REQUEST,
  };
};

export const fetchSuraSuccess = (payload) => {
  return {
    type: FETCH_SURA_SUCCESS,
    payload,
  };
};

export const fetchSuraFailure = (payload) => {
  return {
    type: FETCH_SURA_FAILURE,
    payload,
  };
};

const fetchSuraInitiate = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchSuraRequest());
      const res = await axios.get(
        "https://raw.githubusercontent.com/rimonians/al-quran/main/public/data/data.json"
      );
      dispatch(fetchSuraSuccess(res.data));
    } catch (err) {
      dispatch(fetchSuraFailure(err));
    }
  };
};

export default fetchSuraInitiate;

export const filterSura = (payload) => {
  return {
    type: FILTER_SURA,
    payload,
  };
};

export const searchSura = (payload) => {
  return {
    type: SEARCH_SURA,
    payload,
  };
};
