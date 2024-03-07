const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// time = time.getDate()+"/"+month+"/"+time.getFullYear()+" - "+time.getHours()+":"+time.getMinutes()
// console.log(time)
function addTask() {
    if (inputBox.value === ''||null) {
        alert('Enter some task!!!')
    }
    else {
        var time = new Date()
        var month = time.getMonth()+1
        var time = time.getDate()+"/"+month+"/"+time.getFullYear()+" - "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
        let li = document.createElement('li');
        li.innerHTML = inputBox.value+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+time;
        listContainer.appendChild(li);
        let span = document.createElement('span');;
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    inputBox.value='';
    saveDate();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveDate();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();