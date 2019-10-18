const showfilterReducer = (state={selectGender:''}, action) => {
  console.log("show-selected-leads-Reducer");
  switch (action.type) {
    case "SHOW_ALL":
      console.log(action.payload);
      return Object.assign({}, state, {
        selectGender: 'all'
      })
    case "SHOW_GENDER_BASED_ONLY":
      console.log(action.payload);
      return Object.assign({}, state, {
        selectGender: action.payload
      })

    default: return state
  }
};

export default showfilterReducer;
