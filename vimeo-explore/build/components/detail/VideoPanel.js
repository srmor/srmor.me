var VideoPanel = React.createClass({displayName: "VideoPanel",
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
    var largeVideo = React.createElement(LargeVideo, {img:  this.props.video.thumbnail_large, videoUrl:  this.props.video.url, showEmbed:  this.handleShowEmbed});
    if (this.state.showEmbed) {
      var embedUrl = "https://player.vimeo.com/video/" + this.props.video.id + "?autoplay=1&amp;title=0&amp;byline=0";
      largeVideo = React.createElement("iframe", {src: embedUrl, width: "640", height: "360", frameborder: "0", webkitallowfullscreen: true, mozallowfullscreen: true, allowfullscreen: true});
    }

    return (React.createElement("div", {className: "video-panel"}, 
        React.createElement("div", {className: "close", onClick:  this.props.onDetailsClose}, 
          React.createElement("img", {className: "close-icon", src: "img/glyphicons-208-remove-2-white.png"})
        ), 
        React.createElement("div", {className: "video"}, 
          largeVideo, 
          React.createElement(VideoDetails, {video:  this.props.video})
        )
      ));
  }
});