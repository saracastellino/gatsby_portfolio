import React, { useContext, useState, useEffect } from 'react';
import { withPrefix } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || (
                    <span>
                      <b>I love change, innovation and what is different</b>, and I believe
                      innovation is the solution found collectively through empathy and creativity.
                    </span>
                  )}
                </p>
                <p className="about-wrapper__info-text">
                  My previous work experiences are in:
                  {paragraphTwo || (
                    <span>
                      <ul>
                        <b>
                          <li>education</li>
                          <li>hospitality</li>
                          <li>events and communication management</li>
                          <li>tech startup management</li>
                          <li>web services for micro-businesses</li>
                        </b>
                      </ul>
                    </span>
                  )}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || (
                    <span>
                      I am trained to manage customers in{' '}
                      <b>Italian, English, Spanish and French</b> and I deem my main soft skills in
                      being <b>adaptable, curious and ambitious to excel</b>.
                    </span>
                  )}
                </p>

                <span className="d-flex mt-3">
                  <a
                    href={withPrefix('CV_Sara_Castellino.pdf')}
                    className="cta-btn cta-btn--resume"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
