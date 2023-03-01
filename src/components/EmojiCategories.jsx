import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmojiCategories() {

    const baseUrl = 'https://emoji-api.com/categories?access_key=';
    const apiKey = '3c2df52246fb1ddd77e150186621bdd3e2d1c2d3';

    const [categories,setCategories] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const result = await axios
              .get(baseUrl + apiKey)
              setCategories(result.data)
        }
        fetchData();
    },[])

    return (
        <div>
            <h1>Emoji Categories</h1>
            <div className='container'>
                <ul>
                {categories.map(category => (
                  <li className='category' key={category._id}>
                    <strong>Name</strong> : {category.slug}  
                  </li>
                ))}
                </ul>
            </div>
        </div>
    )

}

export default EmojiCategories;