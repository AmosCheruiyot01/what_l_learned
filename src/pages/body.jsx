import { useState, createContext } from 'react';
import './body.css';
import { cats } from './categories';
import LearnedList from './learnedList';

export const catInput = createContext();



function Body() {

const [cat_selector, setCat_selector] = useState("");
const [empty, setEmpty] = useState(false);

  return (
    <div className='body'>

<catInput.Provider value={{cat_selector, setCat_selector, setEmpty}}>

      <div className="body_left_section">
        <h4>Categories</h4>
        <p onClick={() => setCat_selector("")}>all</p>
        {cats.map((category) => (
          <p key={category} onClick={() => setCat_selector(category)}>{category}</p>
        ))}
      </div>

      <div className="body_right_section">
        <p>Body right section</p>
        {empty  && (
        <h5 style={{ color: 'red'}}>empty!!</h5>
      )}      
        <LearnedList />
      </div>

</catInput.Provider>

    </div>
  );
}

export default Body;
