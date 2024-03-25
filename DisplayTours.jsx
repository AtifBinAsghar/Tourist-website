import {Card} from "react-bootstrap"
import { Carousel } from "react-bootstrap"



export default function DisplayTours({attraction}){
    return(
        
        <Card className="shadow-md" style={{height:"350px"}} >
            <Card.Img
            variant="top"
            src={attraction.web_image.hor}
            height="200px"
            style={{objectFit:"cover"}}
            />
            <Card.Body className="d-flex flex-column" style={{ background:'linear-gradient(to right, #f5f5f5, #dddddd)'}}>
        <Card.Title className="d-flex align-items-baseline 
                 mb-3" style={{
                    width:"100%"}} >
                    
                <span >{attraction.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
        </Card.Title>
            <div className="row justify-content-space-between">
                <div className="col">
                <span style={{color:"#FFCC00"}}>{attraction.ribbon ? attraction.ribbon.name : "Coming Soon"}</span>
                </div>
                <div className="col">
                <span className="text-muted">Price</span>
                </div>
      </div>
                
           
    </Card.Body>
</Card>

)
}