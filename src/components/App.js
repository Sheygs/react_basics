import React from 'react';
const App = () => {
   const name = 'Olusegun Ekoh';
   const styles = {
     color: 'whitesmoke',
     fontSize:150
   }
   const date = new Date();
   const hours = date.getHours() % 12;
   let greeting = 'Morning';
   if (hours > 12){
       greeting = 'Afternoon';
   }

  


   const { color, fontSize } = styles;
   return (
      <h1 style={{color, fontSize}}> Hello { `${name} and good ${ greeting}`  }</h1>
   );
}

export default App;