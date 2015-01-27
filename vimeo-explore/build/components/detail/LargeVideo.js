var LargeVideo = React.createClass({displayName: "LargeVideo",
  handlePlayerClick: function(e) {
    e.preventDefault();
    this.props.showEmbed();
  },
  render: function () {
    return (React.createElement("a", {className: "play-video", target: "_blank", href:  this.props.videoUrl, onClick:  this.handlePlayerClick}, 
      React.createElement("img", {className: "large-thumbnail", src:  this.props.img}), 
      React.createElement("img", {className: "play", src: "img/play.png"})
    ));
  }
});