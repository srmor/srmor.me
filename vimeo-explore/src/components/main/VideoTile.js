var VideoTile = React.createClass({
  handleClick: function() {
    var x = React.render(<Detail video={ this.props.video }/>, document.getElementById('overlay'));
    $('body').css('overflow', 'hidden');
    $('.video-panel').animate({right: 0}, 100);
  },
  render: function () {
    return (<div className="video">
      <img className="thumbnail" src={ this.props.video.thumbnail_medium } onClick={ this.handleClick }/>
    </div>);
  }
});