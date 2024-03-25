import DisplayTours from "./DisplayTours"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SpecificCategoryPackage({data,id}){
    const foundItem  = data.find(i=> parseInt(i.id)===parseInt(id))
    
    return(
        <Row lg={5} md={3} xs={1} className="g-4" style={{ height: "300px", marginBottom:"5px"}}>
    {foundItem.attractions.map((attraction) => (
        <Col key={attraction.id} style={{ height: "100%"}}>
            <Link to={`/details/${attraction.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{ height: '100%'}}>
                    <DisplayTours attraction={attraction} />
                </div>
            </Link>
        </Col>
    ))}
</Row>
       
    )
}