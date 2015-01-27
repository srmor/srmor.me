var VideoDescription = React.createClass({
  processDescription: function (description, showSummary) {
    // make sure <br/> does not have a space in it so that it doesn't get split up
    description = description.replace(/<br \/>/g, '<br/>');

    var descriptionWords = description.split(' ');
    var summaryWords = descriptionWords.slice(0, 60);

    if (showSummary)
      return summaryWords.join(' ').replace(/<br\/>/g, '<br />');
    else
      return description;
  },
  handleShowMoreClick: function() {
    this.props.onShowMoreChange(!this.props.showSummary);
  },
  render: function () {
    var video = this.props.video;
    var showMoreButton;

    if (this.processDescription(video.description, true) !== video.description) {
      showMoreButton = <a className="show-more" onClick={ this.handleShowMoreClick }>{ this.props.showSummary ? 'Show More' : 'Show Less' }</a>;
    }

    return (<div className="description">
              <div className="stats">
                <a className="user row" href={ video.user_url } target="_blank">
                  <span className="user-name">{ video.user_name }</span>
                  <img src={ video.user_portrait_small } />
                </a>
                <div className="row">
                  <span>Plays:</span>
                  <span>{ video.stats_number_of_plays }</span>
                </div>
                <div className="row">
                  <span>Likes:</span>
                  <span>{ video.stats_number_of_likes }</span>
                </div>
                <div className="row">
                  <span>Comments:</span>
                  <span>{ video.stats_number_of_comments }</span>
                </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: this.processDescription(video.description, this.props.showSummary) }}></p>
            { showMoreButton }
          </div>);
  }
});