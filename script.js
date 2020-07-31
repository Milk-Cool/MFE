function readFile(input) {
  var file = input.files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    if(file.name.slice(-3) == ".fb"){
		document.getElementById("x").src = "https://www.facebook.com/plugins/post.php?href=" + reader.result + "&show_text=true&width=552&height=628&appId";
  }
  else if(file.name.slice(-3) == ".sc"){
		document.getElementById("x").src = "https://scratch.mit.edu/projects/" + reader.result + "/embed";
  }
  else if(file.name.slice(-3) == ".yt"){
		document.getElementById("x").src = "https://www.youtube.com/embed/" + reader.result;
  }
  console.log(file.name.slice(-3));
  };
  reader.onerror = function() {
    console.error(reader.error);
  };
}
