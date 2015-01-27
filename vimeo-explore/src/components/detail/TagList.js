var TagList = React.createClass({
  render: function () {
    var tags = this.props.tags.map(function(tag, index) {
      return <DetailTag name={ tag } key={ index } handleTagClick={ this.props.handleTagClick } />;
    }.bind(this));
    return (<div className="tags">
      <h3>Tags:</h3>
      { tags }
      </div>);
  }
});