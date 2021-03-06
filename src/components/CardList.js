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

    renderEmptyDivs(size) {
        let divs = [];
        let cardCount = this.props.cards.length;
        if (size < 12) {
            for (let i=size; i < 12; i++) {
                let key = cardCount + i;
                divs.push(<div key={key} className="col-sm"></div>);
            }
        }
        return divs;
    }

    renderCards() {
        let a = this.props.cards.reduce((acc, card, idx) => {
            let group = acc.pop();
            if (group.length === 12) {
                acc.push(group);
                group = [];
            }
            group.push(card);
            acc.push(group);
            return acc;
        }, [[]]);

        return a.map((group, i) => {
            return (
                <div key={i} className='row'>
                    {group.map((x, j) => <div key={j} className='col-sm'><Card card={x} /></div>)}
                    {this.renderEmptyDivs(group.length)}
                </div>
            );
        });
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="container bg-dark app-card-list">
                <h2>Card List</h2>
                {this.renderCards()}
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