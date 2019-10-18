import React from 'react'
import {connect} from 'react-redux'
import NewLead from './newlead'
import {showAllFunc, showGenderBasedFunc} from '../actions/showFilterActions';

const ShowSelectFew = (props) => {
  console.log(props.masterList);
  console.log(props.genderSelected);
  // let allLeads = props.masterList.map((each, index) => {
  //   return(
  //     <div className="card" style={{'width':'18rem'}}>
  //       <img src={each.picture} className="card-img-top" alt={each.name} />
  //     <ul className="list-group list-group-flush">
  //       <li className="list-group-item">Name: {each.name}</li>
  //       <li className="list-group-item">Gender: {each.gender}</li>
  //       <li className="list-group-item">Email: {each.email}</li>
  //       <li className="list-group-item">Phone: {each.phone}</li>
  //     </ul>
  //   </div>)
  //   });
  let filteredData = props.masterList.filter((each,index) => {
    return each.gender===props.genderSelected
  });
  // let filteredLeads = []
  // filteredLeads = filteredData.map((each, index) => { return (
  //     <div className="card" key={index} style={{'width':'18rem'}} >
  //       <img src={each.picture} className="card-img-top" alt={each.name} />
  //     <ul className="list-group list-group-flush">
  //       <li className="list-group-item">Name: {each.name}</li>
  //       <li className="list-group-item">Gender: {each.gender}</li>
  //       <li className="list-group-item">Email: {each.email}</li>
  //       <li className="list-group-item">Phone: {each.phone}</li>
  //     </ul>
  //   </div>)}
  // );

// console.log(filteredLeads);
// console.log(typeof filteredLeads);
// console.log(allLeads);
// console.log(typeof allLeads);
// console.log(filteredData);
// console.log(filteredData.length);
// console.log(typeof filteredData);
  return (
    <div>
        {props.genderSelected==='all' ? <NewLead /> :
          filteredData.map((each, index) =>
              <div className="card" key={index} style={{'width':'18rem'}}>
                <img src={each.picture} className="card-img-top" alt={each.name}/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {each.name}</li>
                <li className="list-group-item">Gender: {each.gender}</li>
                <li className="list-group-item">Email: {each.email}</li>
                <li className="list-group-item">Phone: {each.phone}</li>
              </ul>
            </div>)}

      <div>
        <button type="button" className="btn btn-warning" id="all" onClick={props.showAllHandler}>Show All</button>
        <button type="button" className="btn btn-warning" id="male" onClick={props.genderSearchHandler}>Show Males</button>
        <button type="button" className="btn btn-warning" id="female" onClick={props.genderSearchHandler}>Show Females</button>
      </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  console.log("map-Dispatch-To-Props-Select-Filter");
  return {
    showAllHandler: (event) => {
      console.log(event.target.id);
      dispatch(showAllFunc(event.target.id))
    },
    genderSearchHandler: (event) => {
      console.log(event.target.id);
      dispatch(showGenderBasedFunc(event.target.id))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state.leads.listOfLeads);
  console.log(state.selectedGender.selectGender);
  return ({
      masterList: state.leads.listOfLeads,
      genderSelected: state.selectedGender.selectGender
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(ShowSelectFew)
