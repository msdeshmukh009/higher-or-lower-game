var readlinesync = require("readline-sync");
var score = 0;
var numList=["201100","134000","550000","368000","450000","1300","301000","550000","37200000","1500000","27100","450000","246000","1220000"];
searchList = ["General Election","Madden 16","VW Golf","DMT","Spirit Away (Movie)","Volcano Surfing","Uganda","Looney Tunes","IKEA","Israel","Willy Wonka","Muslim","New York Jets","Peaky Blinders (TV)"]
console.log("Hey!, You might have heard about the famous game 'Higher or Lower' In which you have to guess the the most search term form given two search term\nSo..this is CLI version of that game.")
console.log("------")
var userResponse = readlinesync.question("Are you ready(y/n): ");
if(userResponse.toUpperCase() =="Y"){
function quiz (currentSearch,nextSearch,num,){
 var userAnswer =readlinesync.question(currentSearch+" has "+num+" average monthly searches "+nextSearch+" has Higher or Lower serches tha"+currentSearch+"\na:Higher\nb:Lower\n");
  if(numList[i]-numList[i+1]>=0 && userAnswer ==="b"){

    console.log("Correct");
    score++;
  }else if(numList[i]-numList[i+1]<=0 && userAnswer ==="a"){
    console.log("Correct");
    score++;
  }else{
    console.log("nahh");
    
  }
console.log("Current score: "+score);
console.log("------")
}
for(var i=0;i<numList.length;i++){

  quiz(searchList[i],searchList[i+1],numList[i])
}
}else{
  console.log("Ok take your time, Comeback when your ready.");
}