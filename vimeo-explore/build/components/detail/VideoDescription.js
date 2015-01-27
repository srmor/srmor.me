var VideoDescription = React.createClass({displayName: "VideoDescription",
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
      showMoreButton = React.createElement("a", {className: "show-more", onClick:  this.handleShowMoreClick},  this.props.showSummary ? 'Show More' : 'Show Less');
    }

    return (React.createElement("div", {className: "description"}, 
              React.createElement("div", {className: "stats"}, 
                React.createElement("a", {className: "user row", href:  video.user_url, target: "_blank"}, 
                  React.createElement("span", {className: "user-name"},  video.user_name), 
                  React.createElement("img", {src:  video.user_portrait_small})
                ), 
                React.createElement("div", {className: "row"}, 
                  React.createElement("span", null, "Plays:"), 
                  React.createElement("span", null,  video.stats_number_of_plays)
                ), 
                React.createElement("div", {className: "row"}, 
                  React.createElement("span", null, "Likes:"), 
                  React.createElement("span", null,  video.stats_number_of_likes)
                ), 
                React.createElement("div", {className: "row"}, 
                  React.createElement("span", null, "Comments:"), 
                  React.createElement("span", null,  video.stats_number_of_comments)
                )
            ), 
            React.createElement("p", {dangerouslySetInnerHTML: { __html: this.processDescription(video.description, this.props.showSummary)}}), 
            showMoreButton 
          ));
  }
});