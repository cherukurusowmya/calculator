var ans=0;
var s="";
document.getElementById("add").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("+"+a);
    document.getElementById("result").textContent=ans;
}
document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans-a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("-"+ans);
    document.getElementById("result").textContent=ans;
}
document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans*a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("*"+a);
    document.getElementById("result").textContent=ans;
}
document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans/a;
    if(s.length==0)
    s=s+a;
    else
    s=s+("/"+a);
    document.getElementById("result").textContent=ans;
}
document.getElementById("equ").onclick=function(){
    b=document.getElementById("wait").textContent=s;
}













































/*document.getElementById("add").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a+b);
    console.log(a+b);
}
document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a-b);
    console.log(a-b);
}
document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a*b);
    console.log(a*b);
}
document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a/b);
    console.log(a/b);
}*/



/*add=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a+b);
    console.log(a+b);
}
sub=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a-b);
    console.log(a-b);
}
mul=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a*b);
    console.log(a*b);
}
div=()=>{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("result").textContent=(a/b);
    console.log(a/b);
}*/