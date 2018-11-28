import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CardList from './components/CardList';
import Nav from './components/Nav';
import Deck from './components/Deck';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {

    render() {
        return (
            <div className="bg-dark text-light h-100">
                    <Nav />
                    <Deck />
                    <Provider store = {store}>
                        <CardList />
                    </Provider>
          
            </div>            
        );
    }
}

export default App;