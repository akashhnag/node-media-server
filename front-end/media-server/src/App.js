
import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import UploadComponent from './components/UploadComponent';
import ViewComponent from './components/ViewComponent';
import { store } from './http/fileUpload';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: false
    }

  }

  shouldComponentUpdate() {
    this.setState({
      uploadStatus: store.getState().uploaded
    }, () => {
      console.log('state', this.state);

    })
    console.log('update');

    return true
  }

  render() {

    console.log(this.state);

    return (
      <div className="App">
        <UploadComponent></UploadComponent>
        {this.state.uploadStatus ? <div><ViewComponent></ViewComponent></div> : null}

      </div>
    )
  }
}

export default (App);
