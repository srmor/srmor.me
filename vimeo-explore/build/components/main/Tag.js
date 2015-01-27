var Tag = React.createClass({displayName: "Tag",
  handleTagFilterUpdate: function (e) {
    if (this.props.selected)
      this.props.onSelectionChange(this.props.name, 'remove');
    else
      this.props.onSelectionChange(this.props.name, 'add');
  },
  render: function () {
    var tagClasses = 'tag ';
    var countValue = this.props.count;

    if (this.props.selected) {
      tagClasses += 'selected';
      countValue = React.createElement("img", {src: "img/glyphicons-208-remove-2-white.png"});
    }

    return (React.createElement("div", {className: tagClasses, onClick:  this.handleTagFilterUpdate}, 
      React.createElement("span", {className: "name"},  this.props.name), 
      React.createElement("span", {className: "count"}, countValue )
    ));
  }
});