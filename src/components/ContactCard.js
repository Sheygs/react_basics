import React from 'react';
const ContactCard = props => {
  console.log(props);
  return (
     <div className="contact-card">
       <img alt="cat" src={props.contact.imgUrl}/>
       <h3>Name: {props.contact.name} </h3>
       <p>Phone No: {props.contact.phoneNumber}</p>
       <p>Email : {props.contact.email}</p>
     </div>
  )
};

export default ContactCard;
