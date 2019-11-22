const addForm=document.querySelector('.add');

const ListOfAdded=document.querySelector('.todos');

const search=document.querySelector('.search input');

const addLister=todos=>{
    
const html=`  <li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todos}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
ListOfAdded.innerHTML+=html;
};
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    
    if(todo.length){
        addLister(todo);
        addForm.reset();
    }

});

ListOfAdded.addEventListener('click',e=>{
    if( e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
   
});

const callBack=(term)=>{
    Array.from(ListOfAdded.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.add('filtered'));

Array.from(ListOfAdded.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.remove('filtered'));
};
search.addEventListener('keyup',e=>{
    const term=search.value.trim().toLowerCase();
    callBack(term);
});