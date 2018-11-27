import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        var altText = "Card Image for " + this.props.card.name;
        var style = {width: '18rem'};
        return (
            <div class="card" style={style}>
                <img class="card-img-top" src={this.props.card.img_url} alt={altText} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.card.name}</h5>
                    <p class="card-text">{this.props.card.description}</p>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;