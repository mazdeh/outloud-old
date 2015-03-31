function updateTimer(ms){
  $("#timer").text(SC.Helper.millisecondsToHMS(ms));
}

function setRecorderUIState(state){
  // state can be reset, recording, recorded, playing, uploading
  // visibility of buttons is managed via CSS
  $("#recorderUI").attr("class", state);
}

var RecordButton = React.createClass({displayName: 'RecordButton',
  
  componentDidMount: function() {
    $("#recorderUI.reset #controlButton").live("click", function(e){
      updateTimer(0);
      SC.record({
        start: function(){
          setRecorderUIState("recording");
        },
        progress: function(ms, avgPeak){
          updateTimer(ms);
        }
      });
      e.preventDefault();
    });


    $("#recorderUI.recording #controlButton, #recorderUI.playing #controlButton").live("click", function(e){
      setRecorderUIState("recorded");
      SC.recordStop();
      e.preventDefault();
    });

    $("#recorderUI.recorded #controlButton").live("click", function(e){
      updateTimer(0);
      setRecorderUIState("playing");
      SC.recordPlay({
        progress: function(ms){
          updateTimer(ms);
        },
        finished: function(){
          setRecorderUIState("recorded");
        }
      });
      e.preventDefault();
    });

    $("#reset").live("click", function(e){
      SC.recordStop();
      setRecorderUIState("reset");
      e.preventDefault();
    });

    $("#upload").live("click", function(e){
      setRecorderUIState("uploading");

    SC.connect({
      connected: function(){
        $("#uploadStatus").html("Uploading...");
        SC.recordUpload({
          track: {
            title: "Untitled Recording",
            sharing: "private"
          }
        }, function(track){
          $("#uploadStatus").html("Uploaded: <a href='" + track.permalink_url + "'>" + track.permalink_url + "</a>");
        });
      }
    });

    e.preventDefault();
  });

  },

  render: function() {
    return (
      
      <div id="recorderUI" class="reset">
          <a href="#" id="controlButton" class="record"><span id="timer" class="hidden">0:00</span></a>
        <div id="otherControls">
          <a href="#" id="reset" class="button">Reset</a>
          <a href="#" id="upload" class="button">Upload</a>
        </div>
        <div id="uploadStatus"></div>
      </div>

      )
  }
})

  React.render(
  <RecordButton />,
  document.getElementById('content')
);