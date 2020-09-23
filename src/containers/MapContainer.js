import React,{Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';  
  export class MapContainer extends Component {
  render(){
    return (
      <div style={{width: '1280px',height: '100%',}}>
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
      </div>
        
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCm156kJfWiTuxv_VJEuEHhRfZvs4NPYsY'
})(MapContainer);
