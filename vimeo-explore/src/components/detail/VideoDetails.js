var VideoDetails = React.createClass({
  getInitialState: function () {
    return {
      showSummary: true
    };
  },
  handleShowMore: function (showSummary) {
    if (showSummary) {
      this.setState({
        showSummary: true
      });
    }
    else {
      this.setState({
        showSummary: false
      });
    }
  },
  render: function () {
    var video = this.props.video;

    var tagList = '';

    if (video.tags.length > 0)
      tagList = <TagList tags={ video.tags } handleTagClick={ this.props.handleTagClick }/>

    return (<div className="video-details">
        <h1><a href={ video.url } target="_blank">{ video.title }</a></h1>
        <VideoDescription video={ video } showSummary={ this.state.showSummary } onShowMoreChange={ this.handleShowMore }/>
        { tagList }
      </div>);
  }
});