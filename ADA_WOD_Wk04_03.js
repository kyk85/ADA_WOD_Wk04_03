function noTriples(x){
  var x = document.getElementById("userInput").value;
  var y = x.split(",");
  var counter = 0;
  var which = [];
  var result = document.getElementById("answer")
  //console.log(y);
  for (i=0;i<y.length;i++){
    for (j=0;j<y.length;j++){
      if (y[j]==y[i]) {
        counter++;
        console.log(counter)
      }
    } 
    if (counter>=3) {
      result.innerHTML="Yes there are!";
      which.push(y[i]);
      counter=0;
    } else {
    //Reset the counter for new [i]loop
    result.innerHTML="No there aren't!";
    counter=0;
    }
  }
} 
  
