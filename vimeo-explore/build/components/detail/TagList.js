var TagList = React.createClass({displayName: "TagList",
  render: function () {
    var tags = this.props.tags.map(function(tag, index) {
      return React.createElement(DetailTag, {name: tag, key: index, handleTagClick:  this.props.handleTagClick});
    }.bind(this));
    return (React.createElement("div", {className: "tags"}, 
      React.createElement("h3", null, "Tags:"), 
      tags 
      ));
  }
});