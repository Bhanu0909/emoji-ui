import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/GetEmoji.css'

function GetEmojis() {

    const apiKey = '3c2df52246fb1ddd77e150186621bdd3e2d1c2d3';
    const baseUrl = 'https://emoji-api.com/emojis?access_key=';

    const[emojis,setEmojis] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const result = await axios.get(baseUrl + apiKey);
          setEmojis(result.data);
        }
        fetchData();
      }, []);

    return (
            <div>
              <h1>Emojis List</h1>
              <div className='container'>
                {emojis.map(emoji => (
                  <div className='emoji' key={emoji._id}>
                    {emoji.character}  
                  </div>
                ))}
            </div>
            </div>
          );
}

export default GetEmojis;