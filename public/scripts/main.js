// var CommentForm = React.createClass({
// 	handleSubmit: function(e) {
//     e.preventDefault();
//     // var author = this.refs.author.getDOMNode().value.trim();
//     var text = this.refs.text.getDOMNode().value.trim();
//     if (!text) {
//       return;
//     }
//     this.props.onCommentSubmit({text: text});
//     // this.refs.text.getDOMNode().value = '';
//   },
//   render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <input type="text" size="40" placeholder="What are you doing RIGHT NOW?" ref="text" />
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
// });


var SCInitialize = React.createClass({
  
  SC.initialize({
    client_id: "5eaf39e81aa342b9d5015a999666cbe1",
    redirect_uri: "",
  });

  SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
        alert("Latest track: " + tracks[0].title);
      });

  render: function() {
    return (
        <div className="soundCloud" >
      );
  }

});

React.render(
  <SCInitialize />,
  document.getElementById('content')
);
