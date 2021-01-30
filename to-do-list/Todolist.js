const TASKFETCH_URL = "https://jsonplaceholder.typicode.com/comments";
let todoArray = [];
const completeArray = [];
let currentTask = 0;









upload = document.querySelector('.upload');
let taskName= document.getElementById('taskName');
let checkbox = document.querySelector('.checkbox');
let comments = document.getElementById('comments');
let taskStatus = document.querySelector('.task-status');
let taskComplete;

upload.addEventListener('click', function() {
      if (taskName.value && comments.value ) {
        todoArray.push({ id: currentTask,
                name: taskName.value,
                description: comments.value,
                 completed: checkbox.checked }); 
                 ; 
                 const taskCard = document.createElement('li');
                 const deleteButton = document.createElement('button');
                 deleteButton.innerText = 'Delete'; 
                 deleteButton.classList.add('delete-button');
                 let checkboxCard = document.createElement('input');
                 checkboxCard.type = 'checkbox';
                 checkboxCard.checked = checkbox.checked;
                 checkboxCard.classList.add('checkbox-card');
                 checkboxCard.name = 'checkbox-card';
                 checkboxCard.value = 'checkbox-card';
                     taskCard.innerText = `Name: ${taskName.value}
                                           Description: ${comments.value}`;
                     taskCard.dataset.index = currentTask;
                     currentTask++; 
                     taskCard.appendChild(checkboxCard);                     
                     taskCard.appendChild(deleteButton);                      
                     taskStatus.appendChild(taskCard); 
                     deleteButton.addEventListener('click', function() {
                             taskCard.remove();
                             for (i=0; i<todoArray.length; i++) {
                                     if (parseInt(todoArray[i].id) == parseInt(taskCard.dataset.index)) {
                                             todoArray.splice(i,1);
                                     }
                             };        
                             
                             console.log(todoArray, currentTask);
                     });
                     checkboxCard.addEventListener('change', function() {
                             
                                     for (i=0; i<todoArray.length; i++) {
                                             if (parseInt(todoArray[i].id) == parseInt(taskCard.dataset.index)) {
                                                     todoArray[i].completed =  this.checked;
                                             }
                                     };
                                     console.log(todoArray);
                             
                     })    
}   else  {
     alert ("Make sure you filled the form");
};
        
        taskName.value = '';
        comments.value = '';
})