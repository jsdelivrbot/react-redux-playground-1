import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <div>No data, please select book!</div>;
        }

        return (
            <div className="col col-md-8">
                <h3>Details for: {this.props.book.title}</h3>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { book: state.activeBook }
}

export default connect(mapStateToProps)(BookDetails);
