import React from 'react'
import {connect} from 'react-redux'
import {fetchingLeadList, fetchedLeadList} from '../actions/listleadAction';
import {fetchLeadList} from '../apicall';

const NewLead = (props) => {
  return (
    <div>
      {console.log(props.leadList)}
      {props.leadList ?
          props.leadList.map((each, index) =>
          <div className="card" style={{'width': '18rem'}}>
            <img src={each.picture} className="card-img-top" alt={each.name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {each.name}</li>
            <li className="list-group-item">Gender: {each.gender}</li>
            <li className="list-group-item">Email: {each.email}</li>
            <li className="list-group-item">Phone: {each.phone}</li>
          </ul>
        </div>) :
        <div>
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="sr-only">Loading...</span>
        </button>
        <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Fetching Leads  .............
        </button></div>
      }

      <button type="button" className="btn btn-primary" onClick={props.apiHandler}>Get New Lead</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  return {
    apiHandler: (event) => {
      dispatch(fetchingLeadList())
      fetchLeadList().then(leadData => dispatch(fetchedLeadList(leadData)))
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    leadList: state.leads.listOfLeads
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLead)
