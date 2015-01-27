var FilterContainer = React.createClass({
  render: function () {
    var tags = {};
    // extract all tags and the number of occurrences
    this.props.videos.forEach(function(video) {
      video.tags.forEach(function(tag) {
        // remove empty tags
        if (tag === '')
          return;

        if (_.has(tags, tag))
          tags[tag]++;
        else
          tags[tag] = 1;
      });
    });

    return (<div id="filter-container">
      <div className="container">
        <SortFilter selectedSort={ this.props.sortFilter } onUserInput={ this.props.onSortFilterUpdate }/>
        <TagFilter tags={ tags } selectedTags={ this.props.tagFilter } onUserInput={ this.props.onTagFilterUpdate } clearFilters={ this.props.clearTagFilters }/>
      </div>
    </div>);
  }
});