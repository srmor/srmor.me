var LargeVideo = React.createClass({displayName: "LargeVideo",
  render: function () {
    return (React.createElement("a", {href:  this.props.videoUrl, target: "_blank", className: "play-video"}, 
      React.createElement("img", {className: "large-thumbnail", src: this.props.img}), 
      React.createElement("img", {className: "play", src: "img/play.png"})
    ));
  }
});