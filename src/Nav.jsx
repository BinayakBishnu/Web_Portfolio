/**
 * It creates a navbar with links to the home page, about page, and contact page. It also has a
 * dropdown menu with links to the projects page.
 * @returns The Navbar component is returning a Navbar element with a container element inside of it.
 * The Navbar element is a bootstrap element that is used to create a navbar. The container element is
 * a bootstrap element that is used to create a container for the navbar. The Navbar element is being
 * given
 */
import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faContactCard } from '@fortawesome/free-regular-svg-icons'

import navStyles from './Navbar.module.css'

export class Nav extends Component {
    showContactPopUp() {
        // document.getElementById("welcome").scrollIntoView();

        // document.getElementById("contactMePopUp").style.display = "block"
        if (document.getElementById("contactMePopUp").style.display === "none") {
            document.getElementById("contactMePopUp").style.display = "block";
        } else /* if (document.getElementById("contactMePopUp").style.display == "block") */ {
            document.getElementById("contactMePopUp").style.display = "none";
        }

        // alert("Clicked");
    }

    render() {
        return (
            <nav className={`${navStyles.navParent}`}>
                {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}

                <ReactBootstrap.Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="light" className={`${navStyles.bStrapParent}`}>
                    <ReactBootstrap.Container className={`${navStyles.bStrapContainer}`}>
                        <ReactBootstrap.Navbar.Brand href="/" className={`${navStyles.links} ${navStyles.brandLink}`}>
                            {/* <ReactBootstrap.NavLink
                                className={`${navStyles.links} ${navStyles.brandLink}`}
                                // activeClassName="is-active"
                                to="/"
                                // exact
                            > */}
                            {/* <ReactBootstrap.Image src={logo} fluid /> */}
                            Binayak
                            {/* </ReactBootstrap.NavLink> */}
                        </ReactBootstrap.Navbar.Brand>
                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto" style={{ "visibility": `${this.props.navDisplay}` }}>
                                <ReactBootstrap.Nav.Link href="#aboutme" className={`${navStyles.links} ${navStyles.leftLinks}`}>About Me</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="#techStack" className={`${navStyles.links} ${navStyles.leftLinks}`}>Tech Stack</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.NavDropdown title="Top Projects" menuVariant="dark" id="collasible-nav-dropdown" className={`${navStyles.links} ${navStyles.leftLinks}`}>
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects#project1">Project 1</ReactBootstrap.NavDropdown.Item>
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects#project2">Project 2</ReactBootstrap.NavDropdown.Item>
                                    {/* <ReactBootstrap.NavDropdown.Item href="/allprojects#project3">Project 3</ReactBootstrap.NavDropdown.Item> */}
                                    <ReactBootstrap.NavDropdown.Divider />
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects">All Projects</ReactBootstrap.NavDropdown.Item>
                                </ReactBootstrap.NavDropdown>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav className={`${navStyles.socialLinksParent} d-flex flex-row`}>
                                <ReactBootstrap.Nav.Link href="https://www.github.com/BinayakBishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links}`}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.behance.net/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faBehance} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayak_bishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link
                                    onClick={this.showContactPopUp}
                                    target="_self"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    {/* <FontAwesomeIcon icon={faContactCard} /> */}
                                    <p style={{ "margin": 0, "fontWeight": "bold" }}>Contact Me</p>
                                </ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
            </nav>
        );
    }
}

export default Nav;