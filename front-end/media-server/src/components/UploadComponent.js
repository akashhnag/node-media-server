import React, { Component } from 'react'
import { fileUpload } from '../http/fileUpload';

export class UploadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }
    fileUploadHandler = (e) => {
        let data = new FormData();
        console.log(data);
        data.append('file', e.target.files[0])
        //data.file = e.target.files[0]
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        fileUpload(data)
    }
    render() {
        return (
            <div>
                <input type='file' name='file' accept='video/*' onChange={this.fileUploadHandler}></input>
            </div>
        )
    }
}

export default UploadComponent
