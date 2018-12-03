import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        var altText = "Card Image for " + this.props.card.name;
        var style = {width: '18rem'};
        return (
            <div className="card bg-dark text-white">
                <img className="card-img-top" src={this.props.card.img_url} alt={this.props.card.name} />
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;