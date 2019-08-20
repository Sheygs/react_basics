import React from 'react';
const ContactCard = props => {
  console.log(props);
  return (
     <div className="contact-card">
       <img alt="cat" src={props.imgUrl}/>
       <h3>Name: {props.name} </h3>
       <p>Phone No: {props.phoneNumber}</p>
       <p>Email : {props.email}</p>
     </div>
  )
};

export default ContactCard;