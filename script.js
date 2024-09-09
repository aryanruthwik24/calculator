let button=Array.from(document.getElementsByClassName('button'));
let input=document.getElementById('input');

let temp="";

button.forEach((element)=>{
    element.addEventListener('click',(e)=>{
      if(e.target.innerHTML=='AC'){
        temp="";
        input.value=temp;
      }
      else if(e.target.innerHTML=='C'){
        temp = temp.substring(0,temp.length-1);
        input.value=temp;
      }
      else if(e.target.innerHTML=='='){
        temp=eval(temp);
      
        input.value=temp;
      }
      else{
        temp=temp+e.target.innerHTML;
        input.value=temp;
        
      }
    })
})

