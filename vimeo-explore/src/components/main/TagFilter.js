var TagFilter = React.createClass({
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
      return <Tag name={ tag.name } count={ tag.count } selected={ _.contains(this.props.selectedTags, tag.name) } onSelectionChange={ this.props.onUserInput } key={ index } index={ index }/>;
    }.bind(this));

    var clearFilters = '';
    if (this.props.selectedTags.length > 0) {
      clearFilters = <span onClick={ this.handleClearFilters } >Clear Filters</span>;
    }

    return (<div id="tag-cloud">
      <div className="header">
        <h3>Filter by top tags</h3>
        { clearFilters }
      </div>
      { tagNodes }
    </div>);
  }
});