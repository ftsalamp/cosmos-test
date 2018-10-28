import React from 'react';
import { Redirect } from 'react-router-dom';
import SimpleComponent from "./SimpleComponent";
import LoaderComponent from "./LoaderComponent";


export default class ComplexComponent extends React.Component {
    _redirectToValidatedTimestamps = false;
    _errorCode = '';
    constructor (props) {
        super(props);
        this.state = {
            showError: false,
            timestampsValidated: false
        };
        this.partB = this.partB.bind(this);
        this._setNewURL = this._setNewURL.bind(this);
    }

    errorHandled (errorCode) {
        this._errorCode = errorCode;
        this.setState({showError: true});
    }

    render () {
        if (this._redirectToValidatedTimestamps) {
            return(this._renderRedirect());
        }
        if (this.state.showError){
            return(
                <SimpleComponent url={this.props.url} code={this._errorCode}/>);
        }
        if (!this.state.timestampsValidated) {this._checkTimestamps();}
         else {
            return (
                <div className="diffcontainer-view">
                    I've got the info!
                </div>);
        }
        return <LoaderComponent/>
    }

    _renderRedirect () {
        this._redirectToValidatedTimestamps = false;
        return (<Redirect to={this.state.newURL} />);
    }

    _checkTimestamps () {
        if (this.props.timestamp === '11111111111111') {
            this._redirectToValidatedTimestamps = true;
            window.setTimeout(this._setNewURL('22222222222222'),10000);
        } else if (this.props.timestamp === '22222222222222') {
            try {
                throw URIError
            } catch (e) {
                this.errorHandled('404');
            }
        } else {
            window.setTimeout(this.partB,1000);
        }
    }

    partB() {
        this.setState({timestampsValidated: true});

    }

    _setNewURL(fetchedTimestamp){
        console.log('setState');
        this.setState({newURL: '/' + fetchedTimestamp + '/' + this.props.url});
    }

}
