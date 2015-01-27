var LargeVideo = React.createClass({
  render: function () {
    return (<a href={ this.props.videoUrl } target="_blank" className="play-video">
      <img className="large-thumbnail" src={this.props.img} />
      <img className="play" src="img/play.png" />
    </a>);
  }
});