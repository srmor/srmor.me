var VideoDetails = React.createClass({displayName: "VideoDetails",
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
      tagList = React.createElement(TagList, {tags:  video.tags, handleTagClick:  this.props.handleTagClick})

    return (React.createElement("div", {className: "video-details"}, 
        React.createElement("h1", null, React.createElement("a", {href:  video.url, target: "_blank"},  video.title)), 
        React.createElement(VideoDescription, {video: video, showSummary:  this.state.showSummary, onShowMoreChange:  this.handleShowMore}), 
        tagList 
      ));
  }
});