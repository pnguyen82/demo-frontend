import React,{Component} from 'react';
import Feature from './../components/Feature';
import Contain from './../components/Contain';
import WhatNews from './../components/WhatNews';
import { withRouter } from 'react-router-dom';
class Main extends Component {
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-12 top">
            <img src="images/Home Header Background 2.svg" alt="" />
          </div>
          <div className="col-12 text-center"style={{zIndex:'2',width: '90%',position:'absolute',marginTop:'120px'}}>
            <h1 >Welcome</h1>
            <a href="">
              <img 
                src="images/Location Pin with Hole and Shadow.svg" 
                alt="" 
                style={{width:'20px'}}
                onClick={()=> {this.props.history.push('/map');}}
              />
            </a>

          </div>
            <Feature/>
        </div>
        <Contain/>
        <hr/>
        <hr/>
        <WhatNews/>    
      </div> 
    );
  }
}

export default withRouter (Main);
