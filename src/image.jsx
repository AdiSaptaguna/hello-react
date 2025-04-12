import React, { Component } from "react";
class Image extends Component {
    render() {
        return(
            <image src={this.props.linkGambar} alt="Food" width='200' height='100'/>
        );
    }
}export default Image;