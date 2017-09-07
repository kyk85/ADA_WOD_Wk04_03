function noTriples(x){
  var x = document.getElementById("userInput").value;
  var z = x.split(",");
  //Sort generated array to allow easier skipping of duplicates (see below)
  var y = z.sort("");
  var counter = 0;
  var which = [];
  var msg1 = document.getElementById("answer");
  var msg2 = document.getElementById("results");
  //Clear answer and results for new tries
  msg1.innerHTML = "";
  msg2.innerHTML = "";console.log(which);
  console.log(y);
  for (i=0;i<y.length;){
    //Generates counter during comparison
    for (j=0;j<y.length;j++){
      if (y[j]==y[i]) {
        counter++;
        //console.log(counter)
      }
    } 
    //Look for triples or more
    if (counter>=3) {
      //Store number into array if more than 3 counted
      //Generates new line of message for stored number
      which.push(y[i]);
      msg2.innerHTML+=counter + " x " + '"' + y[i] + '"' + "s" + "<br/>";
      //Increment i by amount of number found to skip duplicates
      i=i+counter;
      //console.log("test"+i);
      //Reset counter for next [i] loop
      counter=0;
    } else {
    //Reset the counter for next [i]loop
    //msg1.innerHTML="False";
    counter=0;
    //increment i normally
    i++;
    }
  } 
  //For generating initial yes/no message
  //If stored array has anything inside means there are triples
  console.log(which);
  if (which.length>=1) {
      msg1.innerHTML="Yes! There are:";
  } else {
      msg1.innerHTML="No, there are no triples (or more).";
      msg2.innerHTML="";
  }
} 
  

