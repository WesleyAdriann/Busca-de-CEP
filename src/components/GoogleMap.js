import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';

class GoogleMap extends Component {
    render() {
        return (
            <div style={{height: '300px', width: '100%',}}>
                <GoogleMapReact
                    defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                    defaultZoom={17}
                />
            </div>   
        );
    }
}

export default GoogleMap;