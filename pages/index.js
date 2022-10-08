import { useState } from 'react';

const names = ['Al Ian Grey', 'Seth Brogan', 'Kelvin Smith'];

function Header({title}) { 
    console.log(title);
    return <h1>{title}</h1>  
}
       
export default function HomePage() {
  
  const [facilitators, setFacilitators] = useState(0);
  function handleClick() {
    setFacilitators(facilitators+1);
    return
  }

  return ( 
    <div>
      
      <Header title="UX Gathering" />
        <ul>
          { names.map((name) => (
              <li key={name}>{name}</li>
          ))}
        </ul>
      
      <button onClick={handleClick} >Add a Facilitator  ({facilitators})</button> // DO NOT CALL THE FUNCTION IN THE ONCLICK, JUST GIVE THE FUNCTION NAME
    </div>
  )
}
         
