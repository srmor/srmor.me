var TagFilter = React.createClass({displayName: "TagFilter",
  handleClearFilters: function () {
    this.props.clearFilters();
  },
  render: function () {
    var tagArr = [];

    for (var tag in this.props.tags) {
      tagArr.push({
        name: tag,
        count: this.props.tags[tag]
      })
    }

    var sortedTags = _.sortBy(tagArr, 'count').reverse().slice(0, 18);

    var tagNodes = sortedTags.map(function(tag, index) {
      return React.createElement(Tag, {name:  tag.name, count:  tag.count, selected:  _.contains(this.props.selectedTags, tag.name), onSelectionChange:  this.props.onUserInput, key: index, index: index });
    }.bind(this));

    var clearFilters = '';
    if (this.props.selectedTags.length > 0) {
      clearFilters = React.createElement("span", {onClick:  this.handleClearFilters}, "Clear Filters");
    }

    return (React.createElement("div", {id: "tag-cloud"}, 
      React.createElement("div", {className: "header"}, 
        React.createElement("h3", null, "Filter by top tags"), 
        clearFilters 
      ), 
      tagNodes 
    ));
  }
});