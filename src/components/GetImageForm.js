import React, { Component } from 'react'
import axios from 'axios';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';
const API_KEY = "QazYtY3kfDTp9SpLtBtcPFGjpsekcRgTunza7Coo";

export default class GetImageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rover: "Curiosity" || this.state.rover,
            camera: "fhaz" || this.state.camera,
            images: [],
            sol: 1200 || this.state.sol,
            open: false,
            currentImageIndex: 0
        }
    }

    incrementImageIndex = ()=>{
        let currentImageIndex = this.state.currentImageIndex+ 1;
        this.setState({
            currentImageIndex: currentImageIndex
        }, ()=>{
            console.log(currentImageIndex);
        });
    }
    decrementImageIndex = () =>{
        let currentImageIndex = this.state.currentImageIndex -1;
        this.setState({
            currentImageIndex: currentImageIndex
        });

    }

    fetchRoverImage = () => {
        this.setState({ camera: this.state.camera, rover: this.state.rover, sol: this.state.sol });
        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;

        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

        axios.get(imageUrl)
            .then((response) => {
                let images;
                images = response.data.photos;
                this.setState({ images: images });
            });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

toggleOpen = ()=>{
    this.setState({open: !this.state.open});
}

    render() {
        return (
            <div className="main">
            <div className="form">
            <span>
                <label htmlFor="rover">Rover</label>
                <select onChange={this.handleInputChange} id="rover" name="rover" value={this.state.rover}>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirit</option>
                </select>
                </span>
                <span>
                <label htmlFor="camera">Camera Type</label>
                <select onChange={this.handleInputChange} id="rover" name="camera" value={this.state.camera}>
                    <option value="fhaz">FHAZ (Front Hazard)</option>
                    <option value="rhaz">RHAZ (Rear Hazard)</option>
                    <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
                </span>
                <span>
                <label htmlFor="sol">Martian Sol: 1000-2000</label>
                <input type="number" onChange={this.handleInputChange} max="2000" min="1000" name="sol" value={this.state.sol} />
                </span>
                <GetImageButton fetchRoverImage={this.fetchRoverImage} />
                </div>
                <span className="images">
                <ImageDisplay images={this.state.images} open={this.state.open} toggle={this.toggleOpen} currentImageIndex={this.state.currentImageIndex} incrementImageIndex={this.incrementImageIndex} decrementImageIndex={this.decrementImageIndex}/>
                </span>
            </div>
        )
    }
}
