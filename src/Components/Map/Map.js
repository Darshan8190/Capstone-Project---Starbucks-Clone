import React, { Component } from 'react';
import classes from './Map.module.css'
import { withGoogleMap, Marker, GoogleMap } from 'react-google-maps'

class Map extends Component {
    render() {

        const MyMapComponent = withGoogleMap(props => (
            <GoogleMap defaultCenter={{ lat: 43.466667, lng: -80.516670 }}
                defaultZoom={8}>
                {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}

            </GoogleMap>
        ));
        return (
            <div className={classes.mapWrapper}>
                <MyMapComponent
                    containerElement={
                        <div style={{ height: '78vh', width: '100%' }} />
                    }
                    mapElement={<div style={{ height: '100%' }} />}
                    isMarkerShown
                />
            </div>
        )
    }
}

export default Map;