import React from 'react';
import getAlbum from '../flickr';
import Photo from './photo';


class Gallery extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);

    // 72157683256450422
    this.state = {
      galleryId: '72157684821852535',
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
        <div className="row">
          <div className="col-md-12">
            <form className="form">
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  placeholder="flickr gallery id"
                  onChange={this.onChange}/>
              </div>
              <button className="btn btn-primary" onClick={this.onClick}>Search</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {
              this.state.photos.map((photo) => {
                return (
                  <div key={photo.id} >
                    <Photo photo={photo}/>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
