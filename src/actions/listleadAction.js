export function fetchingLeadList(){
  console.log("fetching lead");
  return ({
    type: "FETCHING_LEAD"
  })
}

export function fetchedLeadList(newlead){
  console.log(newlead);
  return ({
    type: "FETCHED_LEAD",
    lead: newlead
  })
}
