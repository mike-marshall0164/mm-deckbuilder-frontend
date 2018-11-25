import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.card.name}</h2>
                <p>{this.props.card.description}</p>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;