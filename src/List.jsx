import React, { Component } from "react";
import image from './image';
class List extends Component{
    render() {
        return(
            <div>
              <image/>
              <ol>
                <li><image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sampel/nasi-padang.jpg"/></li>
                <li><image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sampel/sate.jpg"/></li>
                <li><image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sampel/soto-lamongan.jpg"/></li>
                </ol>  
            </div>
        );
    }
}export default List;