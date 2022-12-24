import React, {Component} from "react";
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";

export default class Header extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="md" bg="#6f42c1" >
                <Container>
                    <Navbar.Brand href="/">
                       <p>expert</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/process">Process</Nav.Link>
                            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl>
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            </FormControl>
                            <Button variant="outline-info" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}