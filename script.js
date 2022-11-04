//display number in text box
 

function displaynum(num){
    console.log(num);
    result.value+=num;
 }
//clear text box
 function clearbox(){
    result.value="";
 }
 //evaluate expression
 function evaluated(){
    exp=result.value;
    out=eval(exp);
    result.value=out
 }
 //removal of  last item from text box
 function removal(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1)
 }