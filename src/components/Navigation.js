import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { TripList } from './TripList';
import { BucketList } from './BucketList';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


export default function Navigation() {
    return (
        <div>
      
            <Router>
                <div>

                <Navbar bg="navbar navbar-expand-lg navbar-light bg-light p-2" variant="light">

                <Container className="">
                <Navbar.Brand href="#home">
                <Image src="https://clipart.world/wp-content/uploads/2020/08/paper-airplane-png-transparent.png" width="50"/>
                <strong className="h3 p-2"> W A N D E R L U S T . </strong>
                </Navbar.Brand>
                <Nav>
                    <Link className="h5 p-3" to="/">Home</Link> 
                    <Link className="h5 p-3" to="/bucketList">Bucket List</Link> 
                    <Link className="h5 p-3" to="/trips">Trips</Link>
                </Nav>
                </Container>

                </Navbar>

                <Switch>
                    <Route path='/trips'> 
                    <TripList />
                    </Route>

                    <Route path='/bucketList'> 
                    <BucketList />
                    </Route>
 
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch>
                </div>
            </Router>
   
        </div>
    );
  }
