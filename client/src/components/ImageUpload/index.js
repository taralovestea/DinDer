import React, {useState, useEffect, Component } from "react";

import storage from "../Firebase/index";
import API from "../../utils/API";

class ImageUpload extends Component {

    // need utils/api to be done, then change
    
  constructor(props) {
    super(props);
    
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`dinder-848ea/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("dinder-848ea")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            API.updateUser({
              profilePic: url
            }
          ).then(res => {
            console.log(this.state.url)
              console.log("RESPONSE is ok", res)
          })
          });
      }
    );
  };
  render() {
    return (
      <div className="center">
        <br />
        <h2 className="green-text">React Firebase Image Uploader</h2>
        <br />
        <br />
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <div id="pictureURL">{this.state.url}</div>
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
