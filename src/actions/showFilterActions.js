export function showAllFunc(genderAsID){
  console.log("show all");
  console.log(genderAsID);
  return ({
    type: "SHOW_ALL",
    payload: genderAsID
  })
}

export function showGenderBasedFunc(genderAsID){
  console.log("show gender based persons");
  console.log(genderAsID);
  return ({
    type: "SHOW_GENDER_BASED_ONLY",
    payload: genderAsID
  })
}
