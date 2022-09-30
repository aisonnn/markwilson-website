let buttons = document.querySelectorAll('button');
let inputs = document.getElementById('inputs');
let outputs = document.querySelector('.outputs');
buttons.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            outputs.textContent = eval(inputs.value);
        }else if(e.target.innerHTML=="C"){
            inputs.value="";
            outputs.textContent="";
        }else if(e.target.innerHTML=="X"){
            inputs.value = inputs.value + "*";
        }else if(e.target.innerHTML=="÷"){
            inputs.value = inputs.value + "/";
        }else if(e.target.innerHTML=="&lt;"){
            inputs.value = inputs.value.slice(0,-1);
        }else if(e.target.innerHTML=="±"){
            let output = parseInt(outputs.textContent);
            if(output<0){
                outputs.textContent = outputs.textContent.slice(1);
            }else{
                outputs.textContent = "-"+outputs.textContent;
            }
            console.log(output);
        }
        else{
            inputs.value = inputs.value + e.target.innerHTML;
        }
    })
});
