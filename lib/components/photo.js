import React from 'react';

class Photo extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);

    this.state = {
    };
  }

  onClick(e) {
    e.preventDefault();
    window.parent.postMessage(this.props,'*');
  }

  render() {
    return (
      <div className="flickr-photo">
        <a href="#">
          <img src={this.props.photo.url_s} className="img-rounded" onClick={this.onClick}/>
        </a>
      </div>
    );
  }
}

export default Photo;
