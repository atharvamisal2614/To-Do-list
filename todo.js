let addTodo = document.getElementById('add');
let Container = document.getElementById('todo');
let input = document.getElementById('input');

addTodo.addEventListener('click',function(){
    var para=document.createElement('p');
    para.classList.add('para-style');
    para.innerText=input.value;
    Container.appendChild(para);
    input.value="";
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick',function(){
        Container.removeChild(para);
    })
})


