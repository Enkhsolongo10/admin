"use client";
import './style.css';
import { BusinessCard } from "./business-card.js"; 
import USERS from './users.json' 
import { App } from './next-button';


export default function Page() {
    return ( 
      <div> 
        <div className="bg-amber-900 grid">
          {/* {USERS.map(people =>(
            <BusinessCard key={people.id} person={people}/>
          ))}; 
          */}
        </div>
        
        <div>
          <App/>
        </div>
      </div>
    );
  }; 







