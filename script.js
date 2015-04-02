var text = "Hey, how are you you doing? My name is EmanuElEmanuel Eduardo E.";

var myName = "Emanuel";
var hits = [];
var possibleName = [];

for (var i = 0; i < text.length; i++) {
 if (text[i] === myName[0]) {
    for (var j = i; j < (myName.length + i); j++) {
        console.log(text[j]);
        if (text[j] !== " ") {
          possibleName.push(text[j]);   
        }
    }
    console.log(possibleName);
    if(possibleName.join("") === myName) {
        for(var k = 0; k < possibleName.length; k++) {
            hits.push(possibleName[k]);
        }
    }
    console.log("emptying possibleName");
    possibleName = [];
  }
}   

if (hits.length > 0) {
    console.log("We found the name " + hits.join("") + ".");
}
else {
    console.log("Your name isn't found.");
}