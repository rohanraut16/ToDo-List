
let listContainer=document.querySelector('.listContainer');
let inputValue=document.querySelector('#inputValue');
let addInput=document.querySelector('.addInput');

let list=[ ]


function renderList(arr){
    listContainer.innerHTML=''
    arr.map((obj)=>{
        let divelm=document.createElement('div');
        divelm.classList.add('list');
        divelm.innerHTML=`
            <p>${obj.text}</p>
             
        `
        let btnelem=document.createElement('button');
        btnelem.className='deleteBtn';
        btnelem.innerHTML='<i class="ri-delete-bin-6-line"></i>'
        divelm.append(btnelem)
        btnelem.onclick=()=>{
            removeHandle(obj.id)
        }
        listContainer.append(divelm)
    })
}
renderList(list);

function handleAddList(){
    let taskList={
        id:Date.now(),
        text:inputValue.value
    }
    list.unshift(taskList)

    renderList(list)
    inputValue.value=''
}

addInput.addEventListener('click',handleAddList)

function removeHandle(id){
       list=list.filter((obj)=>{
        return obj.id !== id;
    })
    renderList(list)
}

