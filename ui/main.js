//Counter Code
var button=document.getElementById("count");
var button=0;
button.onclick=function(){
    
    //take a request to the counter endpoint
    
    //capture the response & store it in a variable
    
    //render the variable in the correct span
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};