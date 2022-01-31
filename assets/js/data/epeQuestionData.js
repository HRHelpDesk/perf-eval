


  let questionEPE = [
    {
        index: '01',
        question:'Demonstrates leadership by creating a culture that supports individual motivation, high levels of individual and team performance, and quality of service.',
        category: 'WORK QUALITY',
        div: 'wrkQualityDiv'
    },
    {
        index: '02',
        question:'Produces targeted outcomes and results efficiently and effectively.',
        category: 'PRODUCTIVITY',
        div: 'productivityDiv'
    },
    {
        index: '03',
        question:'Establishes and maintains good working relationships with customers, by understanding and responding promptly to customer needs and expectations.',
        category: 'CUSTOMER FOCUS (External and Internal)',
        div: 'customerFocusDiv'
    },
    {
        index: '04',
        question:'Demonstrates expertise in the functional aspects of the job.',
        category: 'FUNCTIONAL/TECHNICAL KNOWLEDGE',
        div:'functTechDiv'
    },
    {
        index: '05',
        question:'Proficient use of work-related equipment, tools, and software/technology.',
        category: 'FUNCTIONAL/TECHNICAL KNOWLEDGE',
        div:'functTechDiv'
    },
    {
        index: '06',
        question:'Follows established guidelines and procedures.',
        category: 'FUNCTIONAL/TECHNICAL KNOWLEDGE',
        div:'functTechDiv'
    },
    {
        index: '07',
        question:'Uses clear and appropriate language in writing.',
        category: 'COMMUNICATION (Written, Oral and Presentation)',
        div:'communicationDiv'
    },
    {
        index: '08',
        question:'Verbally conveys information in a clear, accurate and appropriate manner in a variety of situations.',
        category: 'COMMUNICATION (Written, Oral and Presentation)',
        div:'communicationDiv'
    },
    {
        index: '09',
        question:'Produces and delivers formal presentations to a variety of audiences, where applicable.',
        category: 'COMMUNICATION (Written, Oral and Presentation)',
        div:'communicationDiv'
    },
    {
        index: '10',
        question:'Works collaboratively with fellow employees and colleagues to achieve identified goals and objectives.',
        category: 'TEAMWORK/INTERPERSONAL RELATIONS/FLEXIBILITY',
        div:'teamWorkDiv'
    },
    {
        index: '11',
        question:'Builds productive rapport with employees at all levels within and outside the department. Treats others with respect, dignity, and fosters the value of diversity and inclusion.',
        category: 'TEAMWORK/INTERPERSONAL RELATIONS/FLEXIBILITY',
        div:'teamWorkDiv'
    },
    {
        index: '12',
        question:'Adjusts performance to accommodate changes in departmental direction and processes.',
        category: 'TEAMWORK/INTERPERSONAL RELATIONS/FLEXIBILITY',
        div:'teamWorkDiv'
    },
    {
        index: '13',
        question:'Explores and suggests new approaches and methods to achieve departmental goals and responsibilities.',
        category: 'INNOVATION',
        div:'innovationDiv'
    },
    {
        index: '14',
        question:'Analyzes facts and data, using sound judgment, to arrive at effective solutions.',
        category: 'PROBLEM SOLVING',
        div:'probSolvingDiv'
    },
    {
        index: '15',
        question:'Consistently adheres to work schedule and completes assignments in a timely fashion.',
        category: 'DEPENDABILITY/SELF-MANAGEMENT',
        div:'dependDiv'
    },
    {
        index: '16',
        question:'Demonstrates initiative by setting priorities, regularly completing work on schedule, and fulfilling commitments.',
        category: 'DEPENDABILITY/SELF-MANAGEMENT',
        div:'dependDiv'
    },
    {
        index: '17',
        question:'Completes mandatory training on a timely basis.',
        category: 'TRAINING REQUIREMENTS',
        div:'trainingReqDiv'
    },
    {
        index: '18',
        question:'Fosters the value of diversity and inclusiveness, treating all employees with respect, dignity, and fairness in support of equal employment opportunity and affirmative action objectives.',
        category: 'SUPERVISORY AND MANAGEMENT ELEMENTS',
        div:'supMgmtDiv'
    },
    {
        index: '19',
        question:'Supports staff development for employees supervised and maximizes existing skills in all employees.',
        category: 'SUPERVISORY AND MANAGEMENT ELEMENTS',
        div:'supMgmtDiv'
    },
    {
        index: '20',
        question:'Provides employees with performance standards, expectations, and ongoing feedback regarding progress and constructively addresses performance issues.',
        category: 'SUPERVISORY AND MANAGEMENT ELEMENTS',
        div:'supMgmtDiv'
    },
    {
        index: '21',
        question:'Conducts annual performance evaluations for all direct reports and ensures completion for units under one’s organizational responsibility.',
        category: 'SUPERVISORY AND MANAGEMENT ELEMENTS',
        div:'supMgmtDiv'
    },
    {
        index: '22',
        question:'Manages the recruitment process effectively to attract, select and hire the best talent to meet organizational objectives.',
        category: 'SUPERVISORY AND MANAGEMENT ELEMENTS',
        div:'supMgmtDiv'
    },
    {
        index: '23',
        question:'Manages financial performance in area of responsibility in accordance with budget and department goals.',
        category: 'FINANCIAL/RESOURCE MANAGEMENT',
        div:'finResDiv'
    },
    {
        index: '24',
        question:'Manages assets effectively, including technology, equipment, budget and space, where applicable.',
        category: 'FINANCIAL/RESOURCE MANAGEMENT',
        div:'finResDiv'
    },

]


const epeCats = [
    {
        index:'wrkQualityDiv',
        name: 'WORK QUALITY'
    },
    {
        index:'productivityDiv',
        name: 'PRODUCTIVITY'
    },
    {
        index:'customerFocusDiv',
        name: 'CUSTOMER FOCUS (External and Internal)'
    },
    {
        index:'functTechDiv',
        name: 'FUNCTIONAL/TECHNICAL KNOWLEDGE'
    },
    {
        index:'communicationDiv',
        name: 'COMMUNICATION (Written, Oral and Presentation)'
    },
    {
        index:'teamWorkDiv',
        name: 'TEAMWORK/INTERPERSONAL RELATIONS/FLEXIBILITY'
    },
    {
        index:'innovationDiv',
        name: 'INNOVATION'
    },
    {
        index:'probSolvingDiv',
        name: 'PROBLEM SOLVING'
    },
    {
        index:'dependDiv',
        name: 'DEPENDABILITY/SELF-MANAGEMENT'
    },
    {
        index:'trainingReqDiv',
        name: 'TRAINING REQUIREMENTS'
    },
    {
        index:'supMgmtDiv',
        name: 'SUPERVISORY AND MANAGEMENT ELEMENTS'
    },
    {
        index:'finResDiv',
        name: 'FINANCIAL/RESOURCE MANAGEMENT'
    },

]

epeCats.map(i=>{
    document.getElementById('epeCatSelect').innerHTML += `<option value=${i.index}>${i.name}</option>`
})


epeCats.map(i=>{
    let cat = i.name;
     let qs = [];
  questionEPE.map(i=>{
   let qarr = questionEPE.filter(i => cat.includes(i.category))

   qs = qarr.map(i=>{
  return `<option>${i.question}</option>`
   })


    })
    document.getElementById('epeQuestionSelect').innerHTML += `<optgroup label="${cat}"> ${qs}   </optgroup>`

  })

  const showCustomQuestion = ()=>{
document.getElementById('customQuestion').style.display = 'block';
}

const hideCustomQuestion = ()=>{
    document.getElementById('customQuestion').style.display = 'none';
    }
  

    let employeeObj = {
        employeefName:'',
        employeelName:'',
        jobTitle:'',
        department:'',
        reviewingSupervisor:'',
        reviewPeriod:'',
        periodSupervised:'',
        timeInPosition:'',
        questionsToSendArr:[]
    }

  const addQuestion = ()=>{
    document.getElementById('sampleQuestionairre').innerHTML = '';
     const itemToAdd =  questionEPE.filter(i=> document.getElementById('epeQuestionSelect').value == i.question)
     const questionsDiv = document.getElementById('epeQuestions')
     const item = document.getElementById(itemToAdd[0].div)
     console.log(itemToAdd)

     if(questionsDiv.contains(item)){
         console.log(questionsDiv.innerHTML.indexOf(itemToAdd[0].question))
         if(questionsDiv.innerHTML.indexOf(itemToAdd[0].question) > -1){
             alert('This item has already been added.')
         } else{
            document.getElementById('sampleQuestionairre').innerHTML = '';
         document.getElementById(itemToAdd[0].div).innerHTML += `<p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> x</span></p>`
         }
     } else {
        document.getElementById('sampleQuestionairre').innerHTML = '';
         document.getElementById('epeQuestions').innerHTML += `<div id=${itemToAdd[0].div}><p ><b>${itemToAdd[0].category}</b><span onclick="removeCat('${itemToAdd[0].div}')"> x</span></p> <p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> x</span></p></div>`
     }

     employeeObj.questionsToSendArr.push({
         index: itemToAdd[0].index,
         category: itemToAdd[0].category,
         question: itemToAdd[0].question,
         div: itemToAdd[0].div
     })
     console.log(employeeObj)
     function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
let arrCats = employeeObj.questionsToSendArr.map(i=> {return i.category})
var unique = arrCats.filter(onlyUnique);
console.log(unique)
     
unique.map(g=>{
       
        let cat = g;
         let qs = [];
       
         employeeObj.questionsToSendArr.map(i=>{
            let qarr = employeeObj.questionsToSendArr.filter(i => cat.includes(i.category))
         
            qs = qarr.map(i=>{
                return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select class="form-select"><option>---</option> <option>Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
                <option>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
                <option>Fully Meets Expectations (commendable performance that meets goals)</option>
                <option>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
                <option>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
            }).join("")
         
        })
       
             document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
         
      })
      
  }
let catFinder;

let customCat = document.getElementById('customCat').value 
const item = customCat.split(' ')
  const addCustomQuestion = ()=>{
    document.getElementById('sampleQuestionairre').innerHTML = '';
    const itemToAdd =  document.getElementById('customQuestionHtml').value;
    const questionsDiv = document.getElementById('epeQuestions');
    const index = makeid(4);
    console.log(itemToAdd)
if(document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text != 'CUSTOM CATEGORY'){
    if(questionsDiv.contains(document.getElementById(catFinder))){
  
        if(document.getElementById(catFinder).innerHTML.indexOf(itemToAdd) > -1){
            alert('This question has already been added.')
        } else{
        document.getElementById(catFinder).innerHTML += `<p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p>`
        employeeObj.questionsToSendArr.push({
            index: index,
            category: document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text.toUpperCase(),
            question: itemToAdd,
            div: catFinder
        })
        console.log(employeeObj)
        }
       
    } 
    //  if (document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text != 'CUSTOM CATEGORY'){
    //     let cat = document.getElementById('epeCatSelect');
    //     console.log('this')
    //     document.getElementById('epeQuestions').innerHTML += `<div id=${cat.value}><p ><b>${cat.options[cat.selectedIndex].text.toUpperCase()}</b><span onclick="removeCat('${cat.value}')"> x</span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p></div>`
  
    // }
    else {
        document.getElementById('epeQuestions').innerHTML += `<div id=${catFinder}><p ><b>${document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text.toUpperCase()}</b><span onclick="removeCat('${catFinder}')"> x</span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p></div>`
        employeeObj.questionsToSendArr.push({
            index: index,
            category: document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text.toUpperCase(),
            question: itemToAdd,
            div: catFinder
        })
        console.log(employeeObj)
    }
} else {
    let cat = document.getElementById('customCat').value;
    if(questionsDiv.contains(document.getElementById(cat+'Div'))){
  
        if(document.getElementById(cat+'Div').innerHTML.indexOf(itemToAdd) > -1){
            alert('This question has already been added.')
        } else{
        document.getElementById(cat+'Div').innerHTML += `<p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p>`
        employeeObj.questionsToSendArr.push({
            index: index,
            category: cat.toUpperCase(),
            question: itemToAdd,
            div: cat+'Div'
        })
        console.log(employeeObj)
        }
       
    }   else {
        
        console.log(cat.toUpperCase())
        document.getElementById('epeQuestions').innerHTML += `<div id=${cat+'Div'}><p ><b>${cat.toUpperCase()}</b><span onclick="removeCat('${cat+'Div'}')"> x</span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${cat+'Div'}')"> x</span></p></div>`
        employeeObj.questionsToSendArr.push({
            index: index,
            category: cat.toUpperCase(),
            question: itemToAdd,
            div: cat+'Div'
        })
        console.log(employeeObj)
    }
    

}
document.getElementById('customQuestion').style.display = 'none';
document.getElementById('customCat').value = '';
document.getElementById('customQuestionHtml').value = '';
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
let arrCats = employeeObj.questionsToSendArr.map(i=> {return i.category})
var unique = arrCats.filter(onlyUnique);
console.log(unique)
 
unique.map(g=>{
       
    let cat = g;
     let qs = [];
   
     employeeObj.questionsToSendArr.map(i=>{
        let qarr = employeeObj.questionsToSendArr.filter(i => cat.includes(i.category))
     
        qs = qarr.map(i=>{
            return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select class="form-select"><option>---</option> <option>Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
            <option>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
            <option>Fully Meets Expectations (commendable performance that meets goals)</option>
            <option>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
            <option>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
        }).join("")
     
    })
   
         document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
     
  })
  }

  const removeQuestion = (a, b) =>{
      const elm = document.getElementById(a);
      var element = document.querySelectorAll(`#${b} p`).length;
    console.log(element)
    if (element == 2 ){
        removeCat(b)
        
    }
      elm.remove();
      let adjustment = employeeObj.questionsToSendArr.filter(function( obj ) {
        return obj.index !== a;
    });
    employeeObj.questionsToSendArr = adjustment;
    console.log(employeeObj)
    document.getElementById('sampleQuestionairre').innerHTML = '';
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
let arrCats = employeeObj.questionsToSendArr.map(i=> {return i.category})
var unique = arrCats.filter(onlyUnique);
console.log(unique)
     
unique.map(g=>{
       
    let cat = g;
     let qs = [];
   
     employeeObj.questionsToSendArr.map(i=>{
        let qarr = employeeObj.questionsToSendArr.filter(i => cat.includes(i.category))
     
        qs = qarr.map(i=>{
            return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select class="form-select"><option>---</option> <option>Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
            <option>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
            <option>Fully Meets Expectations (commendable performance that meets goals)</option>
            <option>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
            <option>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
        }).join("")
     
    })
   
         document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
     
  })
  }

  const removeCat = (a)=>{

    document.getElementById(a).remove()
    let adjustment = employeeObj.questionsToSendArr.filter(function( obj ) {
        return obj.div !== a;
    });
    employeeObj.questionsToSendArr = adjustment;
    console.log(employeeObj)
    document.getElementById('sampleQuestionairre').innerHTML = '';
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
let arrCats = employeeObj.questionsToSendArr.map(i=> {return i.category})
var unique = arrCats.filter(onlyUnique);
console.log(unique)
     
unique.map(g=>{
       
    let cat = g;
     let qs = [];
   
     employeeObj.questionsToSendArr.map(i=>{
        let qarr = employeeObj.questionsToSendArr.filter(i => cat.includes(i.category))
     
        qs = qarr.map(i=>{
            return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select class="form-select"><option>---</option> <option>Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
            <option>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
            <option>Fully Meets Expectations (commendable performance that meets goals)</option>
            <option>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
            <option>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
        }).join("")
     
    })
   
         document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
     
  })
  }

  const checkForCustomCat = ()=>{
      if(document.getElementById('epeCatSelect').value == 'CUSTOM CATEGORY'){
      

          document.getElementById('customCatDiv').style.display = 'block';
          catFinder = document.getElementById(item+'Div');
      } else {
        document.getElementById('customCatDiv').style.display = 'none';
        catFinder = document.getElementById('epeCatSelect').value
        console.log(catFinder)
      }
  }


  const useSuggestedQuestions = ()=>{
    if (confirm("This action will clear the current criteria and replace with suggested criteria. Are you sure you would like to do this?") == true) {
        epeCats.map(i=>{
            let cat = i.name;
             let qs = [];
           
          questionEPE.map(i=>{
           let qarr = questionEPE.filter(i => cat.includes(i.category))
        
           qs = qarr.map(i=>{
            return `<p id='${i.index}'>${i.question}<span onclick="removeQuestion('${i.index}')"> x</span></p>`
        }).join("")
        
        
            })
            document.getElementById('epeQuestions').innerHTML += `<div id='${i.index}'><p><b>${i.name}</b><span onclick="removeQuestion('${i.index}')"> x</span></p>${qs}</div>`
        
          })

          questionEPE.map(i=>{
               employeeObj.questionsToSendArr.push({
                index: i.index,
                category: i.category,
                question: i.question,
                div: i.div
            })
          })
          document.getElementById('sampleQuestionairre').innerHTML = '';
      
           
             function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
              }
        let arrCats = employeeObj.questionsToSendArr.map(i=> {return i.category})
        var unique = arrCats.filter(onlyUnique);
        console.log(unique)
             
     unique.map(g=>{
       
        let cat = g;
         let qs = [];
       
         employeeObj.questionsToSendArr.map(i=>{
            let qarr = employeeObj.questionsToSendArr.filter(i => cat.includes(i.category))
         
            qs = qarr.map(i=>{
           return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select class="form-select"><option>---</option> <option>Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
           <option>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
           <option>Fully Meets Expectations (commendable performance that meets goals)</option>
           <option>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
           <option>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
            }).join("")
         
        })
       
             document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
         
      })
           
             


          
       
        


   
    }
  
  
  }


  const clearQuestionDiv = ()=>{
    let text;
    if (confirm("Are you sure you would like to clear the current Criteria?") == true) {
        document.getElementById('epeQuestions').innerHTML = ''
        employeeObj.questionsToSendArr = [];
   
    }
  }


  // Set Data

  const setData = (event)=>{
      let value =  event.target.value;
      let name =  event.target.name;
   if (name == 'inputFirstname'){
       employeeObj.employeefName = value;
       document.getElementById('outputFirstname').innerHTML = value;
   }

   if (name == 'inputLastname'){
    employeeObj.employeelName = value;
document.getElementById('outputLastname').innerHTML = value;
}

if (name == 'inputJobTitle'){
    employeeObj.jobTitle = value;
    document.getElementById('outputJobTitle').innerHTML = value;
}

if (name == 'inputDepartment'){
    employeeObj.department = value;
    document.getElementById('outputDepartment').innerHTML = value;

}

if (name == 'inputReviewingSupervisor'){
    employeeObj.reviewingSupervisor = value;
    document.getElementById('outputReviewingSupervisor').innerHTML = value;
}

if (name == 'inputReviewPeriod'){
    employeeObj.reviewPeriod = value;
    document.getElementById('outputReviewPeriod').innerHTML = value;
}

if (name == 'inputPeriodSupervised'){
    employeeObj.periodSupervised = value;
    document.getElementById('outputPeriodSupervised').innerHTML = value;
}
if (name == 'inputTimeInPosition'){
    employeeObj.timeInPosition = value;
    document.getElementById('outputTimeInPosition').innerHTML = value;
}
console.log(employeeObj)
  }

  //Step 3

  const addRemoveGoalSetting = (event)=>{
    let isChecked = event.target.checked;

   if (isChecked){
       document.getElementById('showPartFour').innerHTML = ` <div>
     
       <hr>
       <p><b>PART FOUR A: PERFORMANCE GOALS FOR NEXT REVIEW PERIOD</b></p>
       <hr>
     <p>Supervisor identifies goals for the upcoming review period to ensure continued contributions from the employee for success within the organization.</p>
        <textarea disabled class="questions-div"></textarea>
   </div>

   <div>
     <hr>
     <p><b>PART FOUR B: GOALS FOR/AND PROGRESS ON PROFESSIONAL DEVELOPMENT</b></p>
     <hr>  
     <p>Supervisor lists goals related to the employee’s professional (or managerial) development. Consider
             the employee’s performance improvement needs and action plan, training recommendations, future
             goals and expectations.</p>
      <textarea disabled class="questions-div"></textarea>
 </div>`
   } else {
    document.getElementById('showPartFour').innerHTML = ``
   }
  }