const taskManager = new TaskManager(0);
console.log(taskManager);
// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');
console.log(newTaskForm);
// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
	// Prevent default action

	event.preventDefault();

	// Select the inputs
	let newTaskNameInput = document.querySelector('#inputTask');
	let newTaskDescription = document.querySelector('#inputDescription');
	let newTaskAssignedTo = document.querySelector('#inputAssignee');
	let newTaskDueDate = document.querySelector('#inputDate');
	let newTaskStatus = document.querySelector('#inputStatus');
  const errorMessageName = document.querySelector('#alertMessageName');
  const errorMessageDescription = document.querySelector('#alertMessageDesc');
  const errorMessageAssignedTo = document.querySelector('#alertMessageAssign');
  const errorMessagedueDate = document.querySelector('#alertMessageDue');

/*
	//	Validation code here
	function validate(){
	var inputData = document.forms["newTaskForm"].value
	if (inputData == "")
	if (inputData =="" || newTaskNameInput.value == ""|| newTaskDescription.value==""||newTaskAssignedTo.value == "")	
	{
	alert("Enter a value");
		return false;  
	} 
	else
	{
		return true;
       
	}
}
validate();
    // end validation 
*/
	// Get the values of the inputs
	const name = newTaskNameInput.value;
	const description = newTaskDescription.value;
	const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;


  //var d = Math.floor(Date.parse(dueDate)/1000);  //dueDate in seconds from 1970
  //var d2 = new Math.floor(Date().getTime()/1000); //currentDate in seconds from 1970
  //alert(d); //this is in milliseconds
  //alert(d2);  
    
	if (!validFormFieldInput(name)) {
		errorMessageName.innerHTML = '\xa0\xa0What would you like to do?';
		errorMessageName.style.display = 'inline';
	} else {
		errorMessageName.style.display = 'none';
	}
	if (!validFormFieldInput(description)) {
		errorMessageDescription.innerHTML = '\xa0\xa0Please type in some details';
		errorMessageDescription.style.display = 'inline';
	} else {
		errorMessageDescription.style.display = 'none';
  }
  if (!validFormFieldInput(assignedTo)) {
		errorMessageAssignedTo.innerHTML = '\xa0\xa0Please assign it to someone';
		errorMessageAssignedTo.style.display = 'inline';
	} else {
		errorMessageAssignedTo.style.display = 'none';
  }
	if (Math.floor(Date.parse(dueDate)/1000) < Math.floor(new Date().getTime()/1000)) {
		errorMessagedueDate.innerHTML = '\xa0\xa0How can you get it done in the past?';
		errorMessagedueDate.style.display = 'inline';
  } else if (!dueDate) {
    errorMessagedueDate.innerHTML = '\xa0\xa0Please select a date';
		errorMessagedueDate.style.display = 'inline';
  }
  else 
  {
		errorMessagedueDate.style.display = 'none';
	}
});

function validFormFieldInput(data) {
	return data !== null && data !== '';
	
}
//task1 input
let task1 = new TaskManager(1)
task1.addTask.name = name;
task1.addTask.description = description;
task1.assignedTo = assignedTo;
task1.dueDate = dueDate;
task1.staTus = "TODO";
console.log(task1);

//task2 input
let task2 = new TaskManager(currentId=2);
task2.name= 'peter';
task2.description = "task2";
task2.assignedTo = 'name2';
task2.dueDate = 'today';
task2.staTus = 'TODO';
console.log(task2.name, task2.description, task2.assignedTo, task2.dueDate, task2.staTus);