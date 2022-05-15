let input = document.getElementById("inputext");

let calculator = (number)=>{
    input.value += number;
}

let result =()=>{
   try{
    input.value = Function('"use strict"; return('+ input.value +')')();
   }catch(err){
       alert("Enter vaid value")
   }
}

function clr(){
    input.value = "";
}

function del(){
    input.value = input.value.slice(0,-1);
}

input.addEventListener("keypress",function(event){
    if(event.key === 'Enter')
    {
        event.preventDefault();
        document.getElementById('equal').click();
    }
});