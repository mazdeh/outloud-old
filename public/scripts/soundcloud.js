SC.initialize({
  client_id: "5eaf39e81aa342b9d5015a999666cbe1",
  redirect_uri: "https://theoutloud.herokuapp.com/callback.html",
});

SC.connect(function(){
	SC.oEmbed("https://soundcloud.com/jozaytnb/fetty-wap-my-way-feat-monty", document.getElementById("embed"));
});