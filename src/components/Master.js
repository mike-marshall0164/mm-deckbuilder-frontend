import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Master extends Component {
    render() {
        var altText = "Master Image for " + this.props.master.name;
        var style = {width: '18rem'};
        return (
            <div className="card bg-dark text-white">
                <img className="card-img-top" src={this.props.master.img_url} alt={this.props.master.name} />
                <div className="card-img-overlay invisible">
                    <h5 className="card-title">{this.props.master.name}</h5>
                    <p className="card-text">{this.props.master.description}</p>
                </div>
            </div>
        );
    }
}

Master.propTypes = {
    master: PropTypes.object.isRequired
}

export default Master;