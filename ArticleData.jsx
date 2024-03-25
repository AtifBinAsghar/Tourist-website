import React, { useState, useEffect } from 'react';
import Packages from '../pages/Packages';


const ArticleData = () => {
  const [article, setarticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.yourist.app/api/v2/home-articles/?format=json');

        // Check for successful response (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const ArtData = await response.json();
        setarticle(ArtData);
        // console.log('Article Data:', ArtData);
      } catch (error) {
        console.log('Error Article Data:', error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) :  article? ( 
        <pre>{JSON.stringify(article, null, 2)}</pre>
       
      ) : (
        <p>Loading...</p>
      )}
      <Packages DataArt= {article}/>
    </div>
  );
};

export default ArticleData;