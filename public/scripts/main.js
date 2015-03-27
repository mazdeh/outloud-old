

// var Initializer = React.createClass({
//   render: function() {
//     return (
//         <SCInitialize 
//       );
//   }

// });

var SCInitialize = React.createClass({

  getInitialState: function(){
    return {}
  },

  render: function() {
    return (
      <div>
        Hello, im just SCInitialize s render return
        </div>

      );
  }

});

React.render(
  <SCInitialize />,
  document.getElementById('content')
);
