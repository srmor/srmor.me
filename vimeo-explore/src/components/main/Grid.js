var Grid = React.createClass({
  sortByDate: function(items, direction) {
    var sortedAsc = _.sortBy(items, 'upload_date');

    if (direction === 'asc')
      return sortedAsc;

    return sortedAsc.reverse();
  },
  sortByTitle: function(items, direction) {
    var sortedAsc = _.sortBy(items, 'title');

    if (direction === 'asc')
      return sortedAsc;

    return sortedAsc.reverse();
  },
  sortByPopularity: function(items) {
    return _.sortBy(items, 'stats_number_of_plays').reverse();
  },
  getTaggedVideos: function(videos, tags) {
    var filteredVideos = [];

    videos.forEach(function(video) {
      for (var i = 0; i < tags.length; i++) {
        if (_.contains(video.tags, tags[i])) {
          filteredVideos.push(video);
          break;
        }
      }
    });

    return filteredVideos;
  },
  render: function() {
    var videos = this.props.videos;
    if (this.props.tagFilter.length > 0)
      videos = this.getTaggedVideos(videos, this.props.tagFilter);

    var sortedVideos;

    if (this.props.sortFilter.value === 'date') {
      sortedVideos = this.sortByDate(videos, this.props.sortFilter.direction);
    }
    else if (this.props.sortFilter.value === 'popularity') {
      sortedVideos = this.sortByPopularity(videos);
    }
    else if (this.props.sortFilter.value === 'title') {
      sortedVideos = this.sortByTitle(videos, this.props.sortFilter.direction);
    }

    var videoNodes = sortedVideos.map(function(video, index) {
      return <VideoTile video={video} key={index} handleDetailTagClick={ this.props.handleDetailTagClick } />
    }.bind(this));

    return <div id="video-grid" className="container">{videoNodes}</div>;
  }
});