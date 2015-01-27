var VideoPanel = React.createClass({
  handleShowEmbed: function () {
    this.setState({
      showEmbed: true
    });
  },
  getInitialState: function () {
    return {
      showEmbed: false
    };
  },
  render: function () {
    var largeVideo = <LargeVideo img={ this.props.video.thumbnail_large } videoUrl={ this.props.video.url } showEmbed={ this.handleShowEmbed } />;
    if (this.state.showEmbed) {
      var embedUrl = "https://player.vimeo.com/video/" + this.props.video.id + "?autoplay=1&amp;title=0&amp;byline=0";
      largeVideo = <iframe src={ embedUrl } width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>;
    }

    return (<div className="video-panel">
        <div className="close" onClick={ this.props.onDetailsClose }>
          <img className="close-icon" src="img/glyphicons-208-remove-2-white.png"/>
        </div>
        <div className="video">
          { largeVideo }
          <VideoDetails video={ this.props.video } />
        </div>
      </div>);
  }
});