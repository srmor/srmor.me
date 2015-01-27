var VideoPanel = React.createClass({displayName: "VideoPanel",
  render: function () {
    return (React.createElement("div", {className: "video-panel"}, 
        React.createElement("div", {className: "close", onClick:  this.props.onDetailsClose}, 
          React.createElement("img", {className: "close-icon", src: "img/glyphicons-208-remove-2-white.png"})
        ), 
        React.createElement("div", {className: "video"}, 
          React.createElement(LargeVideo, {img:  this.props.video.thumbnail_large, videoUrl:  this.props.video.url}), 
          React.createElement(VideoDetails, {video:  this.props.video})
        )
      ));
  }
});