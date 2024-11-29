"use client";
import './style.css';

// import {App} from './next-button.js';
import { BusinessCard } from "./card.js"; 
import USERS from './users.json' //json-g tomoor ugnu gsn 

export default function Page() {
    return ( 
      <div>
        {USERS.map(user =>(
          <BusinessCard key={user.id} user={user}/>
        ))}; 
      </div>
        // <App/>
      // // <div className="bg-red-600">  
      //     {/* <div className="grid gap-10">
      //       {users.map(user =>(
      //         <BusinessCard key={user.id} user={user}/>
      //       ))} 
      //     </div> */}
      // // </div>  
    );
  }; 


// const userList = ["John", "Bella"]
// export default function App () {
//     let index = 0;
//     let user = userList[index];
//     return (
//         <div className="App">
//             <button className="next" onClick={() => {
//                 index++;
//                 console.log(index);
//             }}>Next</button>
//             <p>{user}</p>
//         </div>
//     );
// };






