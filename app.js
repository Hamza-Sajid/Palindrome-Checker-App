var result=document.getElementById("result");
var emoji=document.getElementById("emoji");
var numbers = /^[0-9]+$/;
function check() {

  var input=document.getElementById("value");

  var fin=input.value;
  var len=fin.length;
  for(var i=0; i<len/2; i++)
  {
    if(fin[i]!=fin[len-1-i])
    {
      stop();
      return;
    }

    else {
      add(this);
    }
  }
}
function add(a) {

  result.innerHTML="It's Palindrome"+"&#128521";
}

function stop() {
  result.innerHTML="Ahh It's Not Palindrome"+"&#129396";
}
