var Detail = React.createClass({
  handleDetailsClose: function(e) {
    // only close details view if the close button or outside overview are clicked
    var elClass = e.target.getAttribute('class')
    if (e.target.getAttribute('id') === 'details' || elClass === 'close' || elClass === 'close-icon') {
      $('.video-panel').animate({right: '-740px'}, 100, function() {
        React.unmountComponentAtNode(document.getElementById('overlay'));
        $('body').css('overflow', 'auto');
      });
    }
  },
  render: function () {
    return (<div id="details" onClick={ this.handleDetailsClose }>
      <VideoPanel onDetailsClose={ this.handleDetailsClose } video={ this.props.video }/>
    </div>);
  }
});