import './App.css';
import React,{useState,useEffect}  from 'react';
import { BrowserRouter as Router, Switch , Route  } from 'react-router-dom';
import api from '../api/contactsapi'
import Header from "./Header"
import AddContact from "./AddContacts"
import ContactList from "./ContactList"
import 'bootstrap/dist/css/bootstrap.min.css';
import {uuid} from "uuidv4"
import contactDetail from "./contactDetail"

function App() {
  const LoCAL_STORAGE_KEY='contacts'
  const[contacts,setContacts]=useState([
  {
    id:"1",
    "name":"Sahil",
    "email":"sk@gmail.com"
  },
  {
    id:"2",
    "name":"Nikeh",
    "email":"nikesh@gmail.com"
  }
])
 
// const retriveContacts=async ()=>{
//   const response= await api.get("/contactsapi")
//   return response;
// }
 const addConatctHandler=(contact)=>{
   setContacts([...contacts,{ id:uuid(),...contact}])

}
useEffect(()=>{
  localStorage.setItem(LoCAL_STORAGE_KEY,JSON.stringify(contacts));
  
  },[contacts])


useEffect(()=>{
  
  const retrivecontact= JSON.parse(localStorage.getItem(LoCAL_STORAGE_KEY));
   if(retrivecontact) setContacts(retrivecontact)
// const getallcontacts= async () =>{
// const allcontacts =await retriveContacts();
// if(allcontacts) setContacts(allcontacts)

// }
// getallcontacts();
},[])

  


const removeContactHandler=(id)=>{
    const newContactList =contacts.filter((contact)=>{
      return contact.id !==id;
    })
    setContacts(newContactList);
  }
return (
    // className="ui container"
    <div >
      <Router>
     <Header/>
     <Switch>
     
     <Route exact path="/" render={(props)=> <ContactList {...props} getcontacts={contacts} getConatctid={removeContactHandler}/>} />
     <Route path="/add" render={(props)=> <AddContact {...props} addConatctHandler={addConatctHandler}/>} />
     <Route path="/contact/:id" component={contactDetail}  />
     </Switch>
     {/* render={(props)=> <contactDetail {...props}/>} */}
     {/* <AddContact addConatctHandler={addConatctHandler}/>
     <ContactList contacts={contacts} getConatctid={removeContactHandler}/>  */}
     </Router>
    </div>
  );
}

export default App;
