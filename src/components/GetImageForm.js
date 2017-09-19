import React, { Component } from 'react'
import axios from 'axios';
const API_KEY = "QazYtY3kfDTp9SpLtBtcPFGjpsekcRgTunza7Coo";

export default class GetImageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rover: "Curiosity" || this.state.rover,
            camera: "FHAZ" || this.state.camera,
            images: [],
            sol: "",
        }
    }

    fetchRoverImage = () => {
        this.setState({ camera: this.state.camera, rover: this.state.rover, sol: this.state.sol });
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;

        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

        axios.get(imageUrl)
            .then(function (response) {
                let data;
                data = response.data.results;
                console.log(data);
            });
    }

    handleRover = () => {
        console.log('handling rover');
    }

    handleCamera = () => {
        console.log('handling camera');
    }

    handleSol = () => {
        console.log('handling sol');
    }


    render() {
        return (
            <div>
                <label htmlFor="rover">Rover</label>
                <select onChange={this.handleRover} id="rover" value={this.state.value}>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirit</option>
                </select>
                <label htmlFor="camera">Camera Type</label>
                <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                    <option value="fhaz">FHAZ (Front Hazard)</option>
                    <option value="rhaz">RHAZ (Rear Hazard)</option>
                    <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
                <label htmlFor="sol">Martian Sol: 1000-2000</label>
                <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value} />

            </div>
        )
    }
}
