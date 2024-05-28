import React,{Component} from  'react';

class KalGallery extends Component{
    render(){
        return( <div>
            <h1>hey this is using class</h1>
            <img src={this.props.src} alt=""/>
    </div>)}
}
export default KalGallery;