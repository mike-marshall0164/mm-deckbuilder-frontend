import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardsFetchData } from '../actions/cards';
import Card from './Card';

var config = require('../config');

class CardList extends Component {

    componentDidMount() {
        this.props.fetchData(config.deckbuilderApi.url + '/card');
    }


    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <h1>List of Minion Master Cards</h1>
                <div className="app-card-list">
                    {this.props.cards.map((card, i) => (
                        <Card key={i} card={card} />
                    ))}
                </div>
            </div>
        );
    }
}

CardList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        hasErrored: state.cardsHasErrored,
        isLoading: state.cardsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);