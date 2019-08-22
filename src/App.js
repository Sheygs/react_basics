import React from 'react';
//import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import './app.css';
const App = () => {
  return (
    <div className="contact">
      <ContactCard 
        contact={
                  {
                   name:"Mr Sorenson", 
                   imgUrl:"https://placekitten.com/300/200",  
                   phoneNumber:"(555) 345-23",  
                   email:"sorenson@gmail.com"
                  }
              }
      />
      <ContactCard 
           contact =  {{
                    name:"Mr Mark",
                    imgUrl:"https://placekitten.com/400/200",
                    phoneNumber:"(555) 312-24",
                    email:"mark@gmail.com"
             }  
           }    
      />
      <ContactCard
            contact =  {{
              name:"Mr Jackson",
              imgUrl:"https://placekitten.com/400/300",
              phoneNumber:"(555) 459-25",
              email:"jackson@gmail.com"
       }  
     }  
    
      />
      <ContactCard 
       contact =  {{
        name:"Mr Micheal",
        imgUrl:"https://placekitten.com/200/100",
        phoneNumber:"(555) 543-26",
        email:"micheal@gmail.com"
        }  
       } 
      />
    </div>
  )
}


export default App;
