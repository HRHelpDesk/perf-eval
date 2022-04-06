// TEXTAREA HANDLER

const setPipData = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'inputNamePIP'){
        employeeObj.employeeName = value;
        console.log(employeeObj)

    }

    if (name === 'inputEmailPIP'){
        employeeObj.employeeEmail = value;
        console.log(employeeObj)

    }

    if (name === 'inputDepartmentPIP'){
        employeeObj.department = value;
        console.log(employeeObj)

    }
    if (name === 'inputSupervisorPIP'){
        employeeObj.supervisorName = value;
        console.log(employeeObj)

    }
    
    if (name === 'areasOfConcernTextarea'){
        employeeObj.areasOfConcern = value;
        console.log(employeeObj)

    }

    if (name === 'observationsTextarea'){
        employeeObj.observationsAdditionalComments = value;
        console.log(employeeObj)

    }
}


// ADD GOALS
let goalNumber = 0;
let deletableElement;
let delbtnID;
let delBtnIdArr =[];
const addGoal = ()=>{

    let goalTitle =  document.getElementById('inputGoalTitle').value;
let goalId = `G00${Number(goalNumber) + 1}`;
    employeeObj.goalsArr.push({
        goalNumber: goalNumber,
        index: goalId,
        goalTitle:goalTitle,
        startDate:'',
        projectedCompletedDate:'',
        activity:'',
        howToAccomplish:''

    })
    console.log(employeeObj)
    document.getElementById('goalList').innerHTML += `<p><b>GOAL ${goalNumber + 1}: ${goalTitle}</b></p>`
    document.getElementById('goalActivitySection').innerHTML += `
    <div id="${deletableElement}">
    <p><b>GOAL ${goalNumber + 1}: ${goalTitle}</b></p>
    <div class="form-group row">
    <div class="col-md-6">
    <label for=""><b> START DATE:</b></label>
        <input id="${goalId}StartDate" class="form-control" type="text" onkeyup="setGoalData(event, ${goalNumber} ,'startDate')"/>
        </div>
    <div class="col-md-6">
    <label for=""><b>PROJECTED COMPLETED DATE:</b></label>
        <input id="${goalId}ProjectedCompletedDate" class="form-control" type="text" onchange="setGoalData(event, ${goalNumber} ,'projectedCompletedDate')"/>
        </div>
</div>
    
    <p style="margin-top:15px;"><b>ACTIVITY:</b></p>
    <textarea id="${goalId}Activity"  class="questions-div-render" onchange="setGoalData(event, ${goalNumber} ,'activity')"></textarea>

    <p><b>HOW TO ACCOMPLISH:</b></p>
    <textarea id="${goalId}HowToAccomplish" class="questions-div-render" onchange="setGoalData(event, ${goalNumber} ,'howToAccomplish')"></textarea>
    <hr>
    </div>
   
    `
goalNumber = Number(goalNumber) +1;
console.log(goalNumber)

document.getElementById('inputGoalTitle').value = ''
console.log(employeeObj.goalsArr.length)

    if( employeeObj.goalsArr.length >= 0) {
        document.getElementById('deleteBtnDiv').style.display = 'block'
    } 

    console.log(employeeObj)

}


const setGoalData  = (event , arrIndex, prop)=>{

let value = event.target.value;
if (prop === 'startDate'){
  employeeObj.goalsArr[arrIndex].startDate = value;

    console.log(employeeObj.goalsArr[arrIndex])
}

if (prop === 'projectedCompletedDate'){
    employeeObj.goalsArr[arrIndex].projectedCompletedDate = value;
  
      console.log(employeeObj.goalsArr[arrIndex])
  }

  if (prop === 'activity'){
    employeeObj.goalsArr[arrIndex].activity = value;
  
      console.log(employeeObj.goalsArr[arrIndex])
  }

  if (prop === 'howToAccomplish'){
    employeeObj.goalsArr[arrIndex].howToAccomplish = value;
  
      console.log(employeeObj.goalsArr[arrIndex])
  }

  

}


// DELETE GOAL

const deleteGoal = ()=>{
let goalDiv = document.getElementById('goalActivitySection');
employeeObj.goalsArr.pop();
goalDiv.removeChild(goalDiv.lastChild)
goalDiv.removeChild(goalDiv.lastChild)
console.log(employeeObj.goalsArr.length)

goalNumber = goalNumber - 1;
    if( employeeObj.goalsArr.length <= 0) {
        document.getElementById('deleteBtnDiv').style.display = 'none'
    } 
    console.log(employeeObj)
    
 }
