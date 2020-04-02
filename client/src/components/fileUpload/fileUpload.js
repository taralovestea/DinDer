import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    (console.log("hit"))
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    console.log(formData)
    axios.post(`/aws`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log("hit 2")
    }).catch(error => {
      console.log(error)
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default FileUpload;