import React, { Component } from 'react'

class ViewComponent extends Component {
    render() {
        return (
            <div>
                <video src='http://localhost:5000/video' controls width='500' height='300'></video>
            </div>
        )
    }
}

export default ViewComponent
