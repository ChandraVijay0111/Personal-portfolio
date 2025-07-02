import React from 'react'
import { Col, Row, Alert } from "react-bootstrap";

const Resume = () => {
  return (
    <div>
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>For the Resume Click the<br></br>Download Button</h3>
            </Col>
            <Col md={6} xl={7}>
              
                <div className="new-email-bx d-flex justify-content-center">
                  <a href="/Chandra_Vijay_Singh_resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><button id="bfd" >See Resume</button></a>
                  
                  <a href="/Chandra_Vijay_Singh_resume.pdf" download style={{ textDecoration: 'none' }}><button id="bfd" className='m-4'>Download Resume</button></a>
                </div>
              
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  )
}
export default Resume;

