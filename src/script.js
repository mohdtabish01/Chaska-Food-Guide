

import React from "react";
import ReactDOM from "react-dom/client";

const root= ReactDOM.createRoot(document.getElementById('root'));

import Header from "./components/Header";
import Body from "./components/Body";


     
      


       

     


       const AppLayout=()=>{
              return(
                     <div className="App">
                            <Header/>
                            <Body/>
                     </div>
              );
                     
       };


       root.render(<AppLayout/>);