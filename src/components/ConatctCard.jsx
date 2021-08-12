import React from 'react'
import {Link} from "react-router-dom" 
import User from '../images/user.png'

const ContactCard=({contact,clickHandler})=>{
return(
<div className="item">
        <img src={User} alt="user profile" className="ui avatar image" />
                <div className="content">
                    <Link to={{pathname:`/Contact/${contact.id}`, state:{contacts:contact} }}>
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    </Link>
                </div>
                <i onClick={()=>clickHandler(contact.id)} className="trash alternate outline icon right floated" style={{color:'red', fontSize:'2em'}}></i>
            </div>

);
}

export default ContactCard;