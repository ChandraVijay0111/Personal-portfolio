import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../assets/img/portfolio-picb.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Frontend Developer", "Fullstack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hii! I'm Chandra Vijay`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Frontend Developer", "Fullstack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hello! I'm a software developer focused on crafting clean, efficient code and scalable web applications. Whether it's front-end interfaces or full-stack projects, I bring ideas to life with technologies like [React, Node.js, etc.]. This portfolio is a snapshot of my work , take a look and let's connect!</p>
                  <button onClick={() => console.log('connect')}> download resume <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={pic} alt="Header Img"/>
                </div>} */}
                <img src={pic} alt="Header Img"/>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}