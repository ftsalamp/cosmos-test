import React from 'react';

export default class LoaderComponent extends React.Component {
    render () {
        return (
            <div className="loading">
                <img src={window.location.origin + '/img/cat.gif'}/>
            </div>
        );
    }
}
