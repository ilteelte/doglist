import React, { Component } from "react";
import DogBreedImages from "./DogBreedImages";

export default class DogBreedImagesContainer extends Component {
  state = {
    images: null,
    breed: null
  };

  componentDidMount() {
    const breed = this.props.match.params.breed;
    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(res => res.json())
      .then(data => this.updateImagesAndBreed(data.message, breed))
      .catch(console.error);
  }

  updateImagesAndBreed(images, breed) {
    this.setState({
      images: images,
      breed: breed
    });
  }

  render() {
    return (
      <DogBreedImages images={this.state.images} breed={this.state.breed} />
    );
  }
}
