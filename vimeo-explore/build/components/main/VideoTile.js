var VideoTile = React.createClass({displayName: "VideoTile",
  handleClick: function() {
    var x = React.render(React.createElement(Detail, {video:  this.props.video, handleTagClick:  this.props.handleDetailTagClick}), document.getElementById('overlay'));
    $('body').css('overflow', 'hidden');
    $('.video-panel').animate({right: 0}, 100);
  },
  render: function () {
    return (React.createElement("div", {className: "video"}, 
      React.createElement("img", {className: "thumbnail", src:  this.props.video.thumbnail_medium, onClick:  this.handleClick})
    ));
  }
});