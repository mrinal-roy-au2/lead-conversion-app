const getnewleadReducer = (state={listOfLeads:[], selectGender:'all'},action) => {
  console.log("new-lead-Reducer");
  switch (action.type) {
    case "FETCHING_LEAD":
      return Object.assign({}, state, {
        listOfLeads: state.listOfLeads
      })

    case "FETCHED_LEAD":
      return Object.assign({}, state, {
        listOfLeads: state.listOfLeads.concat({
          'name':`${action.lead.results[0].name.first} ${action.lead.results[0].name.last}`,
          'gender': action.lead.results[0].gender,
          'email': action.lead.results[0].email,
          'phone': action.lead.results[0].phone,
          'picture': action.lead.results[0].picture.thumbnail
        })
      })

    default: return state

  }
};

export default getnewleadReducer;
