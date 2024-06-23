import React from "react";
const AddressMap = ({location}) => {
    if(!location) {
        return null;
    }
    const {lat,lng} = location;
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCjmDH4-eFxJC4XinAFNnow2g-4UhWLCPE&q=${lat},${lng}&zoom=14`;
    return(
        <div className="googlemap-code">
            <iframe 
            src={mapSrc}
            width="600"
            height="450"
            frameBorder="0"
            style={{ border:0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            />
        </div>
    )
}

export default AddressMap;