
import React  from "react";
import {Link} from "react-router-dom"
import ContactCard from "./ConatctCard";
const ContactList=(props)=>{

    const deleteContactHandler=(id)=>{
        props.getConatctid(id)
    }
    const renderContactList= props.getcontacts.map((contact)=>{

        return(
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}/>
        );
    });
    return (
      <div>
          <h2>Contact List
              <Link to='/add'>
          <button className="ui button blue right floated">Add Contact</button> 
          </Link>  
           </h2>  
    <div className="ui celled list">
        {renderContactList}
    </div>
    </div>
);
}
export default  ContactList;