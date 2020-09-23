import React,{Component} from 'react';

class Icon extends Component {
render(){
  return (
    <div style={{textAlign:'center',margin:'0 20px'}}>
        <img src={this.props.image} alt="" style= {{width:'120px'}}/>
        <h3>{this.props.name}</h3>
    </div>

  );
}
}

export default Icon;
