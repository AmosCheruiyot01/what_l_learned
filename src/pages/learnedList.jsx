import React, { useEffect, useContext, useState } from 'react';
import './learnedList.css';
import { learned } from './categories';
import { catInput } from './body';
import { dashContext } from '../components/dashboard';
import Axios from 'axios';
import { apiDomain } from '../../../utils/utils';
import axios from 'axios';

function LearnedList() {
  const { cat_selector, setEmpty } = useContext(catInput);
  const { setAllPosts, allPosts, inputUpdates, setInputUpdates } = useContext(dashContext);
  const [dbInput, setDbInput] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch learned from DB
  const allLearned = async () => {
    const response = await axios.get(`${apiDomain}/learned`);
    setDbInput(response.data);
    setIsLoading(false);
  };

  // Filter learned based on category
  const filterLearned = async () => {
    const filtered = await (cat_selector ? dbInput.filter(value => value.category === cat_selector) : dbInput);
    setAllPosts(filtered);
    if (filtered.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  useEffect(() => {
    allLearned();
  }, []);

  useEffect(() => {
    filterLearned();
  }, [cat_selector]);

  // delete learned from DB
  const deleteLearned = async (id) => {
    try{
      const res = axios.delete(`${apiDomain}/learned/${id}`);
      console.log(res);
      allLearned();
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        dbInput.length > 0 ? (
          allPosts.map(value => (
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
                <button onClick={() => { setInputUpdates(value) }}>update?</button>
                <button onClick={() => deleteLearned(value.id)}>delete?</button>
              </div>
            </div>
          ))
        ) : (
          <p>No data found.</p>
        )
      )}
    </div>
  );
}

export default LearnedList;
