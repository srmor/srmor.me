var FilterContainer = React.createClass({displayName: "FilterContainer",
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

    return (React.createElement("div", {id: "filter-container"}, 
      React.createElement("div", {className: "container"}, 
        React.createElement(SortFilter, {selectedSort:  this.props.sortFilter, onUserInput:  this.props.onSortFilterUpdate}), 
        React.createElement(TagFilter, {tags: tags, selectedTags:  this.props.tagFilter, onUserInput:  this.props.onTagFilterUpdate})
      )
    ));
  }
});