
import { Row,Col, Carousel } from "react-bootstrap";
import Description from "./Description";
import BookAndReview from "./BookAndReview";

export default function DetailEach({id, Data}){
    const item = Data.results.find(i => parseInt(i.id) === parseInt(id));
    console.log(item)
    return(
        
        <Row className="justify-content-between">
           
            <Carousel style={{width:"100%"}} >
            {item.attraction_web_images.map((j,index)=>(
                <Carousel.Item key ={index}>
           <div style={{width:"100%"}}>
                <img
                src={j.banner_image}
                alt="Image Aint Displaying"
                style={{width:"100%", objectFit:"contain"}}
                />
                
           </div>
            </Carousel.Item>  
            ))}    
             
        </Carousel> 
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            <div style={{backgroundColor:"lightcyan",marginRight:"auto"}}>
                <span>{item.city.name}</span>
            </div>
            <div>
        <h2 className="text-center mt-3">{item.title}</h2>
            </div>
            <div style={{backgroundColor:"lightcyan",marginRight:"auto"}}>
                <span>{item.town.name}</span>
            </div>
        </div>
        <div className="col-6"style={{ backgroundColor: "#f5f5f5", 
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        borderColor:"lightgrey", borderRadius:"20px", color:"#7f8082"}}>
            <Description item = {item}/>
        </div>
        <div className="col-5 ms-3">
            <BookAndReview/>
        </div>
        </Row>
     

    )
}