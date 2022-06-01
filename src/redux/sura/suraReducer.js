import {
  FETCH_SURA_REQUEST,
  FETCH_SURA_SUCCESS,
  FETCH_SURA_FAILURE,
  FILTER_SURA,
  SEARCH_SURA,
} from "./suraTypes";

const initialSuraState = {
  loading: true,
  filteredData: [],
  data: [],
  filterType: "all",
  error: null,
};

const suraReducer = (state = initialSuraState, action) => {
  switch (action.type) {
    case FETCH_SURA_REQUEST:
      return { ...state, loading: true, filterType: "all", error: null };
    case FETCH_SURA_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
        data: action.payload,
        filterType: "all",
        error: null,
      };
    case FETCH_SURA_FAILURE:
      return {
        ...state,
        loading: false,
        filteredData: [],
        data: [],
        filterType: "all",
        error: action.payload,
      };
    case FILTER_SURA:
      const filtered =
        action.payload === "all"
          ? [...state.data]
          : state.data.filter((el) => el.place === action.payload);
      return { ...state, filteredData: filtered, filterType: action.payload };
    case SEARCH_SURA:
      const searched =
        state.filterType === "all"
          ? state.data.filter(
              (el) =>
                el.ar.toLowerCase().includes(action.payload.toLowerCase()) ||
                el.en.toLowerCase().includes(action.payload.toLowerCase()) ||
                el.bn.toLowerCase().includes(action.payload.toLowerCase()) ||
                el.suraNo === Number(action.payload)
            )
          : state.data.filter(
              (el) =>
                (el.ar.toLowerCase().includes(action.payload.toLowerCase()) ||
                  el.en.toLowerCase().includes(action.payload.toLowerCase()) ||
                  el.bn.toLowerCase().includes(action.payload.toLowerCase()) ||
                  el.suraNo === Number(action.payload)) &&
                el.place === state.filterType
            );
      return { ...state, filteredData: searched };
    default:
      return state;
  }
};

export default suraReducer;
