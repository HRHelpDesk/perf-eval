


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
  


  const addQuestion = ()=>{
     const itemToAdd =  questionEPE.filter(i=> document.getElementById('epeQuestionSelect').value == i.question)
     const questionsDiv = document.getElementById('epeQuestions')
     const item = document.getElementById(itemToAdd[0].div)
     console.log(itemToAdd)

     if(questionsDiv.contains(item)){
         console.log(questionsDiv.innerHTML.indexOf(itemToAdd[0].question))
         if(questionsDiv.innerHTML.indexOf(itemToAdd[0].question) > -1){
             alert('This item has already been added.')
         } else{
         document.getElementById(itemToAdd[0].div).innerHTML += `<p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> x</span></p>`
         }
     } else {
         document.getElementById('epeQuestions').innerHTML += `<div id=${itemToAdd[0].div}><p ><b>${itemToAdd[0].category}</b><span onclick="removeCat('${itemToAdd[0].div}')"> x</span></p> <p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> x</span></p></div>`
     }
  }
let catFinder;

  const addCustomQuestion = ()=>{
    const itemToAdd =  document.getElementById('customQuestionHtml').value;
    const questionsDiv = document.getElementById('epeQuestions')
    const customCat = document.getElementById('customCat').value 
    const item = customCat.split(' ')
     catFinder = document.getElementById(item+'Div');
    const index = makeid(4);
    console.log(item)

    if(questionsDiv.contains(catFinder)){
        console.log(questionsDiv.innerHTML.indexOf(itemToAdd[0].question))
        if(catFinder.innerHTML.indexOf(itemToAdd[0].question) > -1){
            alert('This question has already been added.')
        } else{
        document.getElementById(item+'Div').innerHTML += `<p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p>`
        }
       
    } 
    else if (document.getElementById('epeCatSelect').options[document.getElementById('epeCatSelect').selectedIndex].text != 'CUSTOM CATEGORY'){
        let cat = document.getElementById('epeCatSelect');
        console.log('this')
        document.getElementById('epeQuestions').innerHTML += `<div id=${cat.value}><p ><b>${cat.options[cat.selectedIndex].text.toUpperCase()}</b><span onclick="removeCat('${cat.value}')"> x</span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p></div>`
  
    }
    else {
        document.getElementById('epeQuestions').innerHTML += `<div id=${item+'Div'}><p ><b>${customCat.toUpperCase()}</b><span onclick="removeCat('${item+'Div'}')"> x</span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> x</span></p></div>`
    }
  }

  const removeQuestion = (a, b) =>{
      const elm = document.getElementById(a);
      var element = document.querySelectorAll(`#${b} p`).length;
    console.log(element)
    if (element == 2 ){
        removeCat(b)
    }
      elm.remove();
  }

  const removeCat = (a)=>{

    document.getElementById(a).remove()

  }

  const checkForCustomCat = ()=>{
      if(document.getElementById('epeCatSelect').value == 'CUSTOM CATEGORY'){
          document.getElementById('customCatDiv').style.display = 'block';
      } else {
        document.getElementById('customCatDiv').style.display = 'none';
        catFinder = document.getElementById('epeCatSelect').value
        console.log(catFinder)
      }
  }