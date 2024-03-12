import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://btpeel.com/back/test/categorylist')
      .then(response => {
        setCategories(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Category List</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <strong>{category.title}</strong> - {category.active ? 'Active' : 'Inactive'}
          </li>
        ))}
      </ul>
    </div>
  );
};


export { CategoriesPage }