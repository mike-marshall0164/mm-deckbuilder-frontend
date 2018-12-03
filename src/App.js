import React, { Component } from 'react';
import CardList from './components/CardList';
import MasterList from './components/MasterList';
import Nav from './components/Nav';
import Deck from './components/Deck';

class App extends Component {

    render() {
        return (
            <div className="bg-dark text-light h-100">
                <Nav />
                <Deck />
                <MasterList />
                <CardList />
            </div>            
        );
    }
}

export default App;