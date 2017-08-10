import getAlbum from '../flickr';

//https://www.flickr.com/photos/flickr/galleries/72157684821852535/
var groupId = '72157684821852535';

describe('Flickr Api', () => {

  it('should return photos', () => {
    console.info(getAlbum(groupId)
      .then((response) => console.info(response.data))
      .catch((error) => console.info(error))
    );
  });

});
