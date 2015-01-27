var TagFilter = React.createClass({
  render: function () {
    var that = this;
    var tagArr = [];

    for (var tag in this.props.tags) {
      tagArr.push({
        name: tag,
        count: this.props.tags[tag]
      })
    }

    var sortedTags = _.sortBy(tagArr, 'count').reverse().slice(0, 18);

    var tagNodes = sortedTags.map(function(tag, index) {
      return <Tag name={ tag.name } count={ tag.count } selected={ _.contains(that.props.selectedTags, tag.name) } onSelectionChange={ that.props.onUserInput } key={ index } index={ index }/>;
    });

    return (<div id="tag-cloud">
      <h3>Filter by top tags</h3>
      { tagNodes }
    </div>);
  }
});