import React from 'react';
import {connect} from 'react-redux'
import NewLead from './newlead'
import ShowSelectFew from './showfilter'
import {fetchingLeadList, fetchedLeadList} from '../actions/listleadAction'
import {showAllFunc, showGenderBasedFunc} from '../actions/showFilterActions'

const App = (props) => {
  return (
    <div className="App">
      {(props.masterList.length) ?
      <h2>Total Lead Count: {props.masterList.length}</h2> :
        <h2>Lead Convert App</h2>}
        <NewLead />
        <ShowSelectFew />
      </div>
    );
  }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showAllHandler: (event) => {
//       dispatch(showAllFunc())
//     },
//     showMalesHandler: (event) => {
//       dispatch(showMalesFunc())
//     },
//     showFemalesHandler: (event) => {
//       dispatch(showFemalesFunc())
//     }
//   }
// };

const mapStateToProps = (state) => {
  console.log(state.leads.listOfLeads);
  console.log(state.selectedGender.selectGender);
  return ({
      masterList: state.leads.listOfLeads,
      genderSelected: state.selectedGender.selectGender
  });
};


export default connect(mapStateToProps)(App)
