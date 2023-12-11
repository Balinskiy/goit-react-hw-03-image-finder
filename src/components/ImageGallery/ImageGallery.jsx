import React, { Component } from 'react';
import { ImageGalleryItem, ImageGalleryList } from './ImageGallery.styled';
import * as ImageService from 'service/image-service';
import Searchbar from 'components/Searchbar/Searchbar';

export class ImageGallery extends Component {
  state = {
    images: [],
    search: '',
    error: null,
    page: 1,
  };

  searchImages = search => {
    this.setState({ search });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { search, page } = this.state;
    try {
      const searchResult = await ImageService.getImages(search, page);
      console.log('searchResult', searchResult);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGalleryList className="gallery">
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGalleryList>
      </>
    );
  }
}

export default ImageGallery;
