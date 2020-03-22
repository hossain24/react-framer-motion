import React, { Component } from 'react';
import './upload.css';

class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: ''
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('https://secure-retreat-94330.herokuapp.com/upload', {
            method: 'POST',
            body: data
        }).then(response => {
            response.json().then(body => {
                this.setState({ imageURL: `https://secure-retreat-94330.herokuapp.com/${body.file}` });
            });
        });
    }

    render() {
        return (
            <div className="Upload">
                <div className="Upload-content">

                    <h1>FileUpload</h1>

                    <form onSubmit={this.handleUploadImage}>
                        <div>
                            <input
                                ref={ref => {
                                    this.uploadInput = ref;
                                }}
                                type="file"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                ref={ref => {
                                    this.fileName = ref;
                                }}
                                type="text"
                                placeholder="Enter the desired name of file"
                            />
                        </div>
                        <br />
                        <div>
                            <button>Upload</button>
                        </div>
                        <hr />
                        <p>Uploaded Image:</p>
                        <img src={this.state.imageURL} alt='' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Upload;