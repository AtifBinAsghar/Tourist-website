import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DisplayTours from "../components/DisplayTours";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import SpecificCategoryPackage from "../components/SpecificCategoryPackage";

export default function Packages() {
  const [tourData, setTourData] = useState(null);
  const [error, setError] = useState(null);
  const [showPackage, setShowPackage] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    }
  };


  const handleButtonClick = (tourId) => {
    setShowPackage(true, tourId);
    setSelectedTourId(tourId);
};


  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : !tourData ? (
        <p>Loading...</p>
      ) : (
        <>
          {!showPackage && tourData.map((tour, index) => (
            <div key={index} className="mb-3">
              <div>
                <h2 className="text-center mb-3 mt-3" style={{}}>
                  <span style={{ color: 'blue', fontFamily: "Baskerville,serif", fontWeight: "bold" }}>{tour.title.split(' ')[0]}</span>{" "}
                  <span style={{ color: 'red', fontFamily: "Baskerville,serif", fontWeight: "bold" }}>{tour.title.split(' ')[1]}</span>
                </h2>
                <h6 className="text-center" style={{ color: 'grey' }}>{tour.secondary_title}</h6>

                <Carousel responsive={responsive}>
                  {tour.attractions.map((attraction, index) => (
                    index % 3 === 0 && (
                      <Carousel.Item key={index}>
                        <Row lg={4} md={3} xs={1} className="g-4">
                          {tour.attractions.slice(index, index + 4).map((item, innerIndex) => (
                            <Col key={innerIndex}>
                              <Link to={`/details/${item.id}`} style={{ textDecoration: 'none' }}>
                                <DisplayTours attraction={item} />
                              </Link>
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    )
                  ))}
                </Carousel>

                {/* Render first button only */}
                <div style={{position:"relative",width:"100%"}} className="mt-2 mb-3">
                <button onClick={() => handleButtonClick(tour.id)}
                style={{backgroundColor:"orange", position:"absolute", right:0}}>View All</button>
               { console.log(showPackage.id)}
                </div>
              </div>
            </div>
          ))}
          
          {/* Render SpecificCategoryPackage and second button when showPackage is true */}
          {showPackage && (
            <div style={{ position: 'relative'}}>
              <button onClick={() => setShowPackage(false)}>Hide SpecificCategoryPackage</button>
              <div>
              <SpecificCategoryPackage data={tourData} id={selectedTourId} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}