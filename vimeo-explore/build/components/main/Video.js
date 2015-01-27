var Video = React.createClass({displayName: "Video",
  render: function () {
    return (React.createElement("div", {className: "video"}, 
      React.createElement("img", {className: "thumbnail", src:  this.props.video.thumbnail_medium})
    ));
  }
});