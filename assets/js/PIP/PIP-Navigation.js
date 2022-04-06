const ToStepOnePIP = ()=>{
    window.scrollTo(0,0)
    document.getElementById('pipStepOne').style.display = 'block';
    document.getElementById('pipStepTwo').style.display = 'none';
    document.getElementById('pipStepThree').style.display = 'none';
    
}

const ToStepTwoPIP = ()=>{
    window.scrollTo(0,0)
    document.getElementById('pipStepOne').style.display = 'none';
    document.getElementById('pipStepTwo').style.display = 'block';
    document.getElementById('pipStepThree').style.display = 'none';
   
}

const ToStepThreePIP = ()=>{
    window.scrollTo(0,0)
    document.getElementById('pipStepOne').style.display = 'none';
    document.getElementById('pipStepTwo').style.display = 'none';
    document.getElementById('pipStepThree').style.display = 'block';
    document.getElementById('pipStepFour').style.display = 'none';

}


const ToStepFourPIP = ()=>{
    window.scrollTo(0,0)
    document.getElementById('pipStepOne').style.display = 'none';
    document.getElementById('pipStepTwo').style.display = 'none';
    document.getElementById('pipStepThree').style.display = 'none';
    document.getElementById('pipStepFour').style.display = 'block';
    document.getElementById('pipStepFive').style.display = 'none';
  
    employeeObj.goalsArr.forEach(i=>{
        document.getElementById(i.index +'StartDate').value = i.startDate;
        document.getElementById(i.index +'ProjectedCompletedDate').value = i.projectedCompletedDate;
        document.getElementById(i.index +'Activity').value = i.activity;
        document.getElementById(i.index +'HowToAccomplish').value = i.howToAccomplish;
    }) 


  
   

}

const ToStepFivePIP = ()=>{
    window.scrollTo(0,0)
    document.getElementById('pipStepOne').style.display = 'none';
    document.getElementById('pipStepTwo').style.display = 'none';
    document.getElementById('pipStepThree').style.display = 'none';
    document.getElementById('pipStepFour').style.display = 'none';
    document.getElementById('pipStepFive').style.display = 'block';

    document.getElementById('pipPreviewPt1').innerHTML = `
    <p style="font-size: 24px;"><b>Part One: Information</b></p>
    <div class="form-group row">
                    <div class="col-md-6">
                        <label for="inputFirstname">Name of Person Being Reviewed</label>
                        <p>${employeeObj.employeeName}</p>
                    </div>
                    <div class="col-md-6">
                        <label for="inputDepartment">Department</label>
                        <p>${employeeObj.department}</p>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <label for="inputFirstname"> Review Period</label>
                        <p>${employeeObj.reviewPeriod}</p>
                    </div>
                  
                </div>
    `

    document.getElementById('pipPreviewPt2').innerHTML = `
    <p style="font-size: 24px;"><b>Part Two: Purpose</b></p>
    <hr>
    <p><b>Areas of Concern:</b>(List specific areas where the employee failed to meet expectations)</p>
    <hr>
    <p> ${employeeObj.areasOfConcern}</p>
    <hr>
    <p><b>Observations, Previous Discussions, or Additional Training Provided:</b>(List any previous times the issues have been addressed, the context, and the outcome of discussions or training)</p>
    <hr>
    <p> ${employeeObj.observationsAdditionalComments}</p>
    `

    employeeObj.goalsArr.forEach(i => {
        document.getElementById('pipPreviewPt3').innerHTML += `
        <p><b>GOAL ${goalNumber}: ${i.goalTitle}</b></p>
        <div class="form-group row">
        <div class="col-md-6">
            <label for=""><b> START DATE:</b></label>
            <p>${i.startDate}</p>
            </div>
        <div class="col-md-6">
            <label for=""><b>PROJECTED COMPLETED DATE:</b></label>
            <p>${i.projectedCompletedDate}</p>            </div>
    </div>
        
        <p><b>ACTIVITY:</b></p>
        <p>${i.activity}</p>    
        <p><b>HOW TO ACCOMPLISH:</b></p>
        <p>${i.howToAccomplish}</p>        <hr>
        </div>
        `
    });

    document.getElementById('outputReviewPIP').innerHTML = `
    <div>
    <p> ${employeeObj.employeeName}(${employeeObj.employeeEmail})</p>
    <p>${senderObj.senderName}(${senderObj.senderEmail})</p>
    </div>`


}
