var Tag = React.createClass({
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
      countValue = <img src="img/glyphicons-208-remove-2-white.png"/>;
    }

    return (<div className={ tagClasses } onClick={ this.handleTagFilterUpdate }>
      <span className="name">{ this.props.name }</span>
      <span className="count">{ countValue }</span>
    </div>);
  }
});