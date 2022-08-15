function getInput(){
  var t = document.getElementById("textInput").value;
    document.getElementById("textOutput").innerHTML ="<b>Output</b><br />" + t;

  //Paragraphs
  var p = document.getElementById("paragraphInput").value;
  /*In order to display line breaks we will loop through and insert the <p> tag where the Enter key was entered*/
  var pOutput = "<p>";
 for (var i = 0; i < p.length; i++) {
   if(p.charCodeAt(i)==10){
     //enter key
     pOutput += "</p><p>";
   }else{
     pOutput += p.charAt(i);
   }
} document.getElementById("paragraphOutput").innerHTML = "<b>Output</b><br />" + pOutput+"</p>";

  //Integer
  var i = parseInt(document.getElementById("intInput").value);
  document.getElementById("intOutput").innerHTML = "<b>Output</b><br />" + i;

  //Decimal
  var d = parseFloat(document.getElementById("decInput").value);

document.getElementById("decOutput").innerHTML   = "<b>Output</b><br />" + d;

  var b = document.getElementById("boolInput").checked;

  document.getElementById("boolOutput").innerHTML = "<b>Output</b><br />" + b;
  if(b){
    document.getElementById("boolOutput").innerHTML += "<br />The checkbox was checked.";
  }else{
    document.getElementById("boolOutput").innerHTML += "<br />The checkbox was not checked.";
  }

  //Select from a list
  var prov = document.getElementById("provinces").options[document.getElementById("provinces").selectedIndex].value;//use text if you want the province 2 digit code.
  document.getElementById("provincesOutput").innerHTML = prov;
  
}