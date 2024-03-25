


import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Assuming you are using react-router-dom for routing

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <Container>
            <Navbar sticky="top" expand="lg" className="bg-white shadow-sm mb-3 " style={{ position: 'relative', zIndex: 1000 }}>
                <Container>
                    <Navbar.Brand style={{color:"red"}}><img style={{ width: "2.5rem", height: "2.5rem" }} src="/images/logo.png" alt="" />Yourist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/" 
                            className={activeLink === '/' ? 'nav-link active' : 'nav-link'} 
                            style={activeLink === '/' ?{backgroundColor:"#0066ff", color:"white",borderRadius:"5px",boxShadow: '0 4px 6px #0099ff' }:null }>
                              Home</Nav.Link>

                            <Nav.Link href="/packages" 
                            className={activeLink === '/packages' ? 'nav-link active' : 'nav-link'}
                            style={activeLink === '/packages' ?{backgroundColor:"#0066ff", color:"white",borderRadius:"5px",boxShadow: '0 4px 6px #0099ff' }:null }
                            >Packages</Nav.Link>

                            <Nav.Link href="/about" 
                            className={activeLink === '/about' ? 'nav-link active' : 'nav-link'}
                            style={activeLink === '/about' ?{backgroundColor:"#0066ff", color:"white",borderRadius:"5px",boxShadow: '0 4px 6px #0099ff' }:null }
                            >About</Nav.Link>

                            <Nav.Link href="/login" className="btn btn-primary" style={{
                                height: '2.5rem', width: '3.5rem',
                                position: 'absolute',
                                left: '90%', top: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex'
                            }}>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <button style={{
                        width: '3rem', height: '3rem', backgroundColor: 'silver', color: 'white', position: 'relative'
                    }}
                        varient='outline-primary'
                        className='rounded-circle'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 
                            1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938
                            7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                        </svg>
                    </button>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center'
                        style={{
                            color: 'white', height: '1.5rem',
                            width: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(-25%,-25%)'
                        }}>3</div>


                </Container>
            </Navbar>
        </Container>
    );
                      }
































// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




// export default function NavBar(){
//     return (

//         <Container>
//     <Navbar sticky= {top} expand="lg" className="bg-white shadow-sm mb-3 " style={{ position: 'relative', zIndex: 1000 }}>
//     <Container>
//       <Navbar.Brand ><img style={{width:"2.5rem", height:"2.5rem"}} src="/images/logo.png" alt="" />Yourist</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="/" className='active'>Home</Nav.Link>
//           <Nav.Link href="/packages" >  Packages</Nav.Link>
//           <Nav.Link href="/about">About</Nav.Link>
          
//           <Nav.Link href="/login" className="btn btn-primary" style={{
            
//             height:'2.5rem', width:'3.5rem',
//             position:'absolute', 
//           left:'90%',top:'20%', 
          
//           justifyContent:'center',
//           alignItems:'center',
//           display:'flex'
//            }}>
//             Login
//            </Nav.Link>
//  </Nav>
//       </Navbar.Collapse>
      
//      <button style={{width:'3rem',height:'3rem', backgroundColor:'silver',color:'white',position:'relative'}} 
//      varient = 'outline-primary'
//      className='rounded-circle'>
//       <svg xmlns="http://www.w3.org/2000/svg" 
//      width="24" height="24" viewBox="0 0 24 24">
//       <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 
//       1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938
//        7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
//       </svg>
//       </button>
//       <div className=' rounded-circle bg-danger d-flex justify-content-center align-item-center'
//       style={{color:'white',height:'1.5rem',
//       width:'1.5rem',position:'absolute', bottom:0, right:0, transform:'translate(-25%,-25%)'}}>3</div>
     
      
//     </Container>
//   </Navbar>
// </Container>
// );
// }