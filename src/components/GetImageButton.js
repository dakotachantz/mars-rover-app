import React from 'react'

const GetImageButton = (props) => {
    return (
        <div>
            <button onClick={props.fetchRoverImage}>Get Rover Image</button>
        </div>
    );
}

export default GetImageButton;
