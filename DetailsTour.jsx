import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DetailEach from '../components/DetailEach';

import {Row,Col} from 'react-bootstrap'


export default function DetailsTour(){
    const [attraction, setAttraction] = useState(null);
    const {id} = useParams()
   
    useEffect(() => {
      fetch('https://cors-anywhere.herokuapp.com/http://api.yourist.app/api/v2/attractions/?format=json')
        .then(response => response.json())
        .then(data => {
          setAttraction(data);
        })
        .catch(error => {
          console.log('Error fetching TopTourDetails details:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
    
    // console.log(`the results for item are ${attraction.results}`)
   
    
    
  
    if (!attraction) {
      return <div>Loading...</div>;
    }


    
    
  
  
    // Render attraction details here
    return (

        <Container>
           
            
            <DetailEach id = {id} Data = {attraction}/>
           
            
         
            
            
        </Container>
    );
  };