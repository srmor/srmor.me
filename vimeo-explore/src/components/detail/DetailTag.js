var DetailTag = React.createClass({
  handleTagClick: function() {
    this.props.handleTagClick(this.props.name);
  },
  render: function () {
    return (<span className="tag" onClick={ this.handleTagClick } >{ this.props.name }</span>);
  }
});