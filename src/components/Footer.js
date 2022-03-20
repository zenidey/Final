import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Col,
  Image
} from 'react-bootstrap';

export default function FooterNav() {
  
  return (
      <Nav className='container-fluid d-flex justify-content-center text-center text-white bg-dark mt-5' >
            <Col>
           <div>
              <Link className="btn m-4" href="#"><Image src="https://www.iconsdb.com/icons/preview/white/instagram-xxl.png" width="50"/></Link>

              <Link className="btn m-4" href="#"><Image src="https://www.iconsdb.com/icons/preview/white/pinterest-5-xxl.png" width="50"/></Link>

              <Link className="btn m-4" href="#"><Image src="https://www.iconsdb.com/icons/preview/white/twitter-xxl.png" width="50"/></Link>

              <Link className="btn m-4" href="#"><Image src="https://www.iconsdb.com/icons/preview/white/facebook-4-xxl.png" width="50"/></Link>

              <Link className="btn m-4" href="#"><Image src="https://www.iconsdb.com/icons/preview/white/google-plus-3-xxl.png" width="50"/></Link>

            </div>
            </Col>
     </Nav>
  );
}




