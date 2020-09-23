import React,{Component} from 'react';

class News extends Component {
render(){
  return (
    <div >
        <img src={this.props.image} alt=""  style={{width:'200px'}}/>
        <h3>{this.props.title}</h3>
        <p>{this.props.dicription}</p>
        <a className="btn">Learn more</a>
    </div>
  );
}
}

export default News;
