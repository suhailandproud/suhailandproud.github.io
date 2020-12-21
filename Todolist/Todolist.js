const TASKFETCH_URL = "https://jsonplaceholder.typicode.com/comments";
let taskArray = [];
const completeArray = [];
let currentTask = 1;





fetch(TASKFETCH_URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    for (i=0; i<data.length; i++) {
        
        taskArray.push(data[i].name);    
};
userDescription.innerText = taskArray[0];
})
.then(feed());


const userDescription = document.querySelector('.userDescription');


function feed() { setInterval (function() {

    userDescription.innerText = taskArray[currentTask]; 
    currentTask++;
}, 60000)
};

let upload= document.querySelector('.upload');
let userName= document.getElementById('userName');
let checkbox = document.querySelector('.checkbox');
let comments = document.getElementById('comments');

upload.addEventListener('click', function() {
    if (userName.value) {
        completeArray.push({'name' : userName.value,
                             'description': userDescription.innerText,
                            'taskComplete': checkbox.checked,
                            'comments' : comments.value}); 
                                               
    } else {
        alert ("Make sure you answer everything");
    };
    userName.value = '';
    comments.value = '';
        console.log(completeArray);
})

