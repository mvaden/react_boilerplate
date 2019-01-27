import React, { Component } from 'react';
import Nav from '../../components/nav/nav';
import Landing from '../../components/landing/landing';
import Footer from '../../components/footer/footer';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is the Home component</h1>
                <Nav />
                <Landing />
                <Footer />
            </div>
        )
    }
}

export default Home;