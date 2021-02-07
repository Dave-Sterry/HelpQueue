import React from "react";
// import TicketList from "./TicketList";

function Ticket(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Ticket;