import {useState, useEffect } from 'react';
// import Packages from '../pages/Packages';




const TourData = () => {
  const [tourData, setTourData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.yourist.app/api/v2/attraction-sections-for-web/?format=json');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTourData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    // Fetch data only if tourData is null
    if (!tourData) {
      fetchData();
    }
  }, [tourData]); // Add tourData to the dependency array to prevent infinite loop
return (
  <div></div>
)
  
};

export default TourData;