import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/developer-logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const onScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }
    return (
        <Navbar expand="lg" className={scroll ? "scroll" : ""}>

            <Container>

                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt='LOGO' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a title="linkedin Profile" target="_blank" href="https://www.linkedin.com/in/goyal-archit/"><img src={navIcon1} alt="" /></a>
                            <a title="github Profile" target="_blank" href="https://github.com/"><img src={navIcon2} alt="" /></a>
                            <a title="Resume Download" target="_blank" href="https://drive.google.com/file/d/1t8ZVRlMRhwAQaRxNmFl4G3qwRBiMQd0l/view?usp=sharing"><img src={navIcon3} alt="" /></a>
                        </div>
                        {/* <button
                            className="vvd" href="http://wa.me/917045841921">Contact Me
                        </button> */}
                    </span>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;
