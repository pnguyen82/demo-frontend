import React,{Component} from 'react';
import News from './News';
class Feature extends Component {
render(){
  return (
    <div className=" row new">
        <div className="col-12">
            <h2>What's news</h2>
        </div>
        <br/>
        <div className="col-3 text-center">
            <News image = "images/29.png" title = "How to use the App" dicription = "hij"></News>
        </div>
        <div className="col-3 text-center">
            <News image = "images/27.png" title = "How to use the App" dicription = "hij"></News>
        </div>
    </div>

  );
}
}

export default Feature;
