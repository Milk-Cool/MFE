function readFile(input) {
  var file = input.files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    if(file.name.slice(-3) == ".fb"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "500";
		document.getElementById("x").src = "https://www.facebook.com/plugins/post.php?href=" + reader.result + "&show_text=true&width=552&height=628&appId";
  }
  else if(file.name.slice(-3) == ".sc"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "300";
		document.getElementById("x").src = "https://scratch.mit.edu/projects/" + reader.result + "/embed";
  }
  else if(file.name.slice(-3) == ".yt"){
		document.getElementById("x").width = "576";
		document.getElementById("x").height = "324";
		document.getElementById("x").src = "https://www.youtube.com/embed/" + reader.result;
  }
  else if(file.name.slice(-3) == ".pb"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "500";
		document.getElementById("x").src = "https://pastebin.com/embed_iframe/" + reader.result;
  }
  else if(file.name.slice(-3) == ".ig"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "554";
		document.getElementById("x").src = "https://www.instagram.com/p/" + reader.result + "/embed";
  }
  else if(file.name.slice(-3) == ".im"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "500";
		document.getElementById("x").src = "https://i.imgur.com/" + reader.result;
  }
  else if(file.name.slice(-3) == ".gp"){
		document.getElementById("x").width = "500";
		document.getElementById("x").height = "500";
		document.getElementById("x").src = "https://giphy.com/embed/" + reader.result;
  }
  //console.log(file.name.slice(-3));
  };
  reader.onerror = function() {
    console.error(reader.error);
  };
}
