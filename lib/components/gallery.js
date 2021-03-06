import React from 'react';
import getAlbum from '../flickr';
import Photo from './photo';


class Gallery extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      galleryId: '72157684821852535', //default gallery id
      photos: []
    };
  }

  componentDidMount() {


    getAlbum(this.state.galleryId)
      .then((res) => {
        this.setState({
          photos: res.data.photos.photo
        });
      });
  }

  onClick(e) {
    e.preventDefault();
    getAlbum(this.state.galleryId)
      .then((res) => {
        this.setState({
          photos: res.data.photos.photo
        });
      })
      .catch(() => {
        alert('Invalid gallery id!');
      });
  }

  onChange(e) {
    this.setState({
      galleryId: e.target.value
    });
  }

  render() {
    return (
      <div>

        <form className="form-inline">
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="flickr gallery id"
              onChange={this.onChange}/>
          </div>
          <button className="btn btn-primary btn-block" onClick={this.onClick}>Show Gallery Images</button>
        </form>

        {
          this.state.photos.map((photo) => {
            return (
              <div key={photo.id} className="text-center">
                <Photo photo={photo}/>
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default Gallery;
