import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vasu</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright @ {year} Vasu</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/vasusharrma" style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>

            </li>
            <li className="social-icons">
              <a href="https://twitter.com/vasuu23"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/vasusharrmaa/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/vasusharrmaa"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
