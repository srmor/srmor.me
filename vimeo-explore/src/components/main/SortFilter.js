var SortFilter = React.createClass({
  handleSortChange: function() {
    var newInput = this.refs.sortFilterInput.getDOMNode().value;
    var splitInput = newInput.split('-');

    this.props.onUserInput({
      value: splitInput[0],
      direction: splitInput[1]
    });
  },
  createOptionValueFromFilter: function (filter) {
    return filter.value + '-' + filter.direction;
  },
  render: function () {
    var newSelectedSort = this.createOptionValueFromFilter(this.props.selectedSort)
    return (<div id="sort-filter">
        <div className="header">
          <h3>Sort By:</h3>
        </div>
        <select value={ newSelectedSort } onChange={ this.handleSortChange } ref="sortFilterInput">
          <option value="date-desc">Date Desc</option>
          <option value="date-asc">Date Asc</option>
          <option value="title-desc">Title Desc</option>
          <option value="title-asc">Title Asc</option>
          <option value="popularity-desc">Popularity</option>
        </select>
      </div>);
  }
});