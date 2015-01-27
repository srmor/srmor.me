var SortFilter = React.createClass({displayName: "SortFilter",
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
    return (React.createElement("div", {id: "sort-filter"}, 
        React.createElement("h3", null, "Sort By:"), 
        React.createElement("select", {value: newSelectedSort, onChange:  this.handleSortChange, ref: "sortFilterInput"}, 
          React.createElement("option", {value: "date-desc"}, "Date Desc"), 
          React.createElement("option", {value: "date-asc"}, "Date Asc"), 
          React.createElement("option", {value: "title-desc"}, "Title Desc"), 
          React.createElement("option", {value: "title-asc"}, "Title Asc"), 
          React.createElement("option", {value: "popularity-desc"}, "Popularity")
        )
      ));
  }
});