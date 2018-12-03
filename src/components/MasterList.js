import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mastersFetchData } from '../actions/masters';
import Master from './Master';

var config = require('../config');

class MasterList extends Component {

    componentDidMount() {
        this.props.fetchData(config.deckbuilderApi.url + '/master');
    }

    renderEmptyDivs(size) {
        let divs = [];
        let masterCount = this.props.masters.length;
        if (size < 12) {
            for (let i=size; i < 12; i++) {
                let key = masterCount + i;
                divs.push(<div key={key} className="col-sm"></div>);
            }
        }
        return divs;
    }

    renderMasters() {
        let a = this.props.masters.reduce((acc, master, idx) => {
            let group = acc.pop();
            if (group.length === 12) {
                acc.push(group);
                group = [];
            }
            group.push(master);
            acc.push(group);
            return acc;
        }, [[]]);

        return a.map((group, i) => {
            return (
                <div key={i} className='row'>
                    {group.map((x, j) => <div key={j} className='col-sm'><Master master={x} /></div>)}
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
            <div className="container bg-dark app-master-list">
                <h2>Masters</h2>
                {this.renderMasters()}
            </div>
            
        );
    }
}

MasterList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    masters: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        masters: state.masters,
        hasErrored: state.mastersHasErrored,
        isLoading: state.mastersIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(mastersFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterList);