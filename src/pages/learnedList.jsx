import React, { useEffect, useContext } from 'react';
import './learnedList.css';
import { learned } from './categories';
import { catInput } from './body';
import { dashContext } from '../components/dashboard';

function LearnedList() {
  const { cat_selector, setEmpty } = useContext(catInput);
  const { setAllPosts, allPosts, inputUpdates, setInputUpdates } = useContext(dashContext);

  // Filter learned based on category
 console.log(cat_selector);

 function filterLearned() {
  const filtered = cat_selector? learned.filter(value => value.category == cat_selector): learned;
  setAllPosts(filtered);
  if (filtered.length == 0) {
    setEmpty(true);
  } else {
    setEmpty(false);
  }
}
 
useEffect(() => {
  filterLearned();
}, [cat_selector])

console.log(inputUpdates)


  return (
    <div>
      {allPosts.map(value => (
        <div key={value.category} className="learned">
          <h5>{value.header}</h5>
          <p>{value.body}</p>
          <div className="learned_footer">
            <p>learned on: {value.date}</p>
            <p>
              category: <span>{value.category}</span>
            </p>
            
          </div>
          <div className="actions">
          <button>like?</button>
            <button onClick={() =>{setInputUpdates(value)}}>update?</button>
            <button>delete?</button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default LearnedList;
