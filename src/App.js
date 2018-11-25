import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CardList from './components/CardList';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {

    render() {
        return (
            <Provider store = {store}>
                <CardList />
            </Provider>
        );
    }
}

export default App;