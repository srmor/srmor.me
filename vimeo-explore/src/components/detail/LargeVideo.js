var LargeVideo = React.createClass({
  handlePlayerClick: function(e) {
    e.preventDefault();
    this.props.showEmbed();
  },
  render: function () {
    return (<a className="play-video" target="_blank" href={ this.props.videoUrl } onClick={ this.handlePlayerClick } >
      <img className="large-thumbnail" src={ this.props.img } />
      <img className="play" src="img/play.png" />
    </a>);
  }
});