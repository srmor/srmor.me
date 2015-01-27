var Main = React.createClass({
  processVideoResponse: function(videos) {
    return videos.map(function(video) {
      if (video.tags === '')
        video.tags = [];
      else
        video.tags = video.tags.split(', ');

      return video;
    });
  },
  componentDidMount: function() {
    for (var i = 1; i <= 3; i++) {
      $.when($.getJSON(this.props.source + '?page=1'), $.getJSON(this.props.source + '?page=2'), $.getJSON(this.props.source + '?page=3')).then(function(r1, r2, r3) {
        var videos = r1[0].concat(r2[0], r3[0]);
        if (this.isMounted()) {
          this.setState({
            videos: this.processVideoResponse(videos)
          });
        }
      }.bind(this));
    }
  },
  getInitialState: function () {
    return {
      videos: [],
      sortFilter: {
        value: 'date',
        direction: 'desc'
      },
      tagFilter: []
    };
  },
  clearTagFilters: function () {
    this.setState({
      tagFilter: []
    });
  },
  handleSortFilterUpdate: function (newFilter) {
    this.setState({
      sortFilter: newFilter
    });
  },
  handleTagFilterUpdate: function (tag, updateType) {
    if (updateType === 'add') {
      var newTagFilter = this.state.tagFilter;
      newTagFilter.push(tag);
      this.setState({
        tagFilter: newTagFilter
      });
    }
    else if (updateType === 'remove') {
      var newTagFilter = [];
      this.state.tagFilter.forEach(function (curTag) {
        if (curTag !== tag)
          newTagFilter.push(curTag);
      });

      this.setState({
        tagFilter: newTagFilter
      });
    }
  },
  render: function () {
    return (<div>
      <Grid videos={ this.state.videos } sortFilter={this.state.sortFilter} tagFilter={this.state.tagFilter}/>
    <FilterContainer sortFilter={this.state.sortFilter} tagFilter={this.state.tagFilter}  onSortFilterUpdate={ this.handleSortFilterUpdate } onTagFilterUpdate={ this.handleTagFilterUpdate } videos={ this.state.videos } clearTagFilters={ this.clearTagFilters }/>
    <div id="overlay"></div>
    </div>);
  }
});