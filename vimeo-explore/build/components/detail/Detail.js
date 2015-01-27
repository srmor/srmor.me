var Detail = React.createClass({displayName: "Detail",
  closeDetailsModal: function() {
    $('.video-panel').animate({right: '-740px'}, 100, function() {
      React.unmountComponentAtNode(document.getElementById('overlay'));
      $('body').css('overflow', 'auto');
    });
  },
  handleDetailsClose: function(e) {
    // only close details view if the close button or outside overview are clicked
    var elClass = e.target.getAttribute('class')
    if (e.target.getAttribute('id') === 'details' || elClass === 'close' || elClass === 'close-icon') {
      this.closeDetailsModal();
    }
  },
  handleTagClick: function(tag) {
    this.props.handleTagClick(tag);
    this.closeDetailsModal();
  },
  render: function () {
    return (React.createElement("div", {id: "details", onClick:  this.handleDetailsClose}, 
      React.createElement(VideoPanel, {onDetailsClose:  this.handleDetailsClose, video:  this.props.video, handleTagClick:  this.handleTagClick})
    ));
  }
});