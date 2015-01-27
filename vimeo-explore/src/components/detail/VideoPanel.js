var VideoPanel = React.createClass({
  render: function () {
    return (<div className="video-panel">
        <div className="close" onClick={ this.props.onDetailsClose }>
          <img className="close-icon" src="img/glyphicons-208-remove-2-white.png"/>
        </div>
        <div className="video">
          <LargeVideo img={ this.props.video.thumbnail_large } videoUrl={ this.props.video.url } />
          <VideoDetails video={ this.props.video } />
        </div>
      </div>);
  }
});