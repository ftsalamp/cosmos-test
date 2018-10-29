import React from 'react';


export default class SimpleComponent extends React.Component {

    render () {
        if (this.props.code === '404') {
            return (
                <div className='alert alert-warning' role='alert'>{this.props.url} not found.</div>
            );
        }
        return (
            <div className='alert alert-warning' role='alert'>Communication
                is not possible at the moment. Please try again later.</div>
        );
    }
}
