const questionsPE360 = [
    {
        index: '01',
        question:'Sets high standards for quality of work output',
        category:'QUALITY OF WORK',
        div: 'qualityDiv'

    },

    {
        index: '02',
        question:'Helps others improve the quality of their work',
        category:'QUALITY OF WORK',
        div: 'qualityDiv'
    },
    {
        index: '03',
        question:'Communicates well orally and in written form',
        category:'COMMUNICATION',
        div: 'commDiv'
    },
    {
        index: '04',
        question:'Displays good listening skills',
        category:'COMMUNICATION',
        div: 'commDiv'
    },
    {
        index: '05',
        question:'Shares information freely with others',
        category:'COMMUNICATION',
        div: 'commDiv'
    },
    {
        index: '06',
        question:'Contributes positively to team',
        category:'TEAMWORK',
        div: 'teamwrkDiv'
    },
    {
        index: '07',
        question:'Helps define team roles to maximize output',
        category:'TEAMWORK',
        div: 'teamwrkDiv'
    },
    {
        index: '08',
        question:'Can be counted on to complete tasks correctly',
        category:'TEAMWORK',
        div: 'teamwrkDiv'
    },
    {
        index: '09',
        question:'Presents a positive image to outsiders',
        category:'PERSONAL QUALIFICATIONS AND LEADERSHIP',
        div: 'personQualDiv'
    },
    {
        index: '10',
        question:'Is friendly and easy to work with',
        category:'PERSONAL QUALIFICATIONS AND LEADERSHIP',
        div: 'personQualDiv'
    },
    {
        index: '11',
        question:'Adapts well to change',
        category:'PERSONAL QUALIFICATIONS AND LEADERSHIP',
        div: 'personQualDiv'
    },
    {
        index: '12',
        question:'Has high professional and ethical standards',
        category:'PERSONAL QUALIFICATIONS AND LEADERSHIP',
        div: 'personQualDiv'
    }
    
    
]


const PE360Cats  =[
    {
        index:'qualityOfWrkDiv',
        name: 'QUALITY OF WORK'
    },
    {
        index:'communicationDiv',
        name: 'COMMUNICATION'
    },
    {
        index:'teamworkDiv',
        name: 'TEAMWORK'
    },
    {
        index:'personalQualAndLeadershipDiv',
        name: 'PERSONAL QUALIFICATIONS AND LEADERSHIP'
    },
]

const showCustomQuestionPE360 = ()=>{
    document.getElementById('customQuestionPE360').style.display = 'block';
    }


const hideCustomQuestionPE360 = ()=>{
    document.getElementById('customQuestionPE360').style.display = 'none';
    }

    PE360Cats.map(i=>{
        document.getElementById('pe360CatSelect').innerHTML += `<option value=${i.index}>${i.name}</option>`
    })
    PE360Cats.map(i=>{
        let cat = i.name;
         let qs = [];
         questionsPE360.map(i=>{
       let qarr = questionsPE360.filter(i => cat.includes(i.category))
    
       qs = qarr.map(i=>{
      return `<option>${i.question}</option>`
       })
    
    
        })
        document.getElementById('pe360QuestionSelect').innerHTML += `<optgroup label="${cat}"> ${qs}   </optgroup>`
    
      })


      const checkForCustomCatPE360 = ()=>{
        if(document.getElementById('pe360CatSelect').value == 'CUSTOM CATEGORY'){
        
  
            document.getElementById('customCatDivPE360').style.display = 'block';
            catFinder = document.getElementById(item+'Div');
        } else {
          document.getElementById('customCatDivPE360').style.display = 'none';
          catFinder = document.getElementById('pe360CatSelect').value
          console.log(catFinder)
        }
    }

    const useSuggestedQuestionsPE360 = ()=>{
        if (window.confirm("This action will clear the current criteria and replace with suggested criteria. Are you sure you would like to do this?") == true) {
            document.getElementById('pe360Questions').innerHTML = ``

            PE360Cats.map(i=>{
                let cat = i.name;
                 let qs = [];

              questionsPE360.map(i=>{
               let qarr = questionsPE360.filter(i => cat.includes(i.category))
            
               qs = qarr.map(i=>{
                return `<p id='${i.index}'>${i.question}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${i.index}')"> </span></p>`
            }).join("")
            
            
                })
                document.getElementById('pe360Questions').innerHTML += `<div id='${i.index}'><p><b>${i.name}</b><span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${i.index}')"> </span></p>${qs}</div>`
            
              })
    
              questionsPE360.map(i=>{
                   employeeObj.questionsToSendArr.push({
                    index: i.index,
                    category: i.category,
                    question: i.question,
                    div: i.div,
                    itemId: makeid(7),
                    answer: ''
                })
              })
              document.getElementById('pe360SampleQuestionairre').innerHTML = '';
          
               
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
               return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  >
               <select class="form-select">
               <option>---</option>
               <option>Strongly Agree</option>
               <option>Agree</option>
               <option>Disagree</option>
               <option>Strongly Disagree</option>
               <option>NA</option></select></div></div>`
                }).join("")
             
            })
           
                 document.getElementById('pe360SampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
             
          })
       
        }
      
      
      }

      const clearQuestionDivPE360 = ()=>{
        let text;
        if (window.confirm("Are you sure you would like to clear the current Criteria?") == true) {
            document.getElementById('pe360Questions').innerHTML = ''
            employeeObj.questionsToSendArr = [];
       
        }
      }


      const addQuestionPE360 = ()=>{
        document.getElementById('pe360SampleQuestionairre').innerHTML = '';
         const itemToAdd =  questionsPE360.filter(i=> document.getElementById('pe360QuestionSelect').value == i.question)
         const questionsDiv = document.getElementById('pe360Questions')
         const item = document.getElementById(itemToAdd[0].div)
         console.log(itemToAdd)
    
         if(questionsDiv.contains(item)){
             console.log(questionsDiv.innerHTML.indexOf(itemToAdd[0].question))
             if(questionsDiv.innerHTML.indexOf(itemToAdd[0].question) > -1){
                 alert('This item has already been added.')
             } else{
                document.getElementById('pe360SampleQuestionairre').innerHTML = '';
             document.getElementById(itemToAdd[0].div).innerHTML += `<p class="cat-hide" id=${itemToAdd[0].index}>${itemToAdd[0].question}<span class='delete-btn hide-icon icon icon--trash--can'  onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> </span></p>`
             }
         } else {
            document.getElementById('pe360SampleQuestionairre').innerHTML = '';
             document.getElementById('pe360Questions').innerHTML += `<div  id=${itemToAdd[0].div}><p class="cat-hide" ><b>${itemToAdd[0].category}</b><span class='delete-btn hide-icon icon icon--trash--can' onclick="removeCat('${itemToAdd[0].div}')"> </span></p> <p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> </span></p></div>`
         }
    
         employeeObj.questionsToSendArr.push({
             index: itemToAdd[0].index,
             category: itemToAdd[0].category,
             question: itemToAdd[0].question,
             div: itemToAdd[0].div,
             itemId: makeid(7),
             answer: ''
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
                    return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  >
                    <select class="form-select">
                    <option>---</option>
                    <option>Strongly Agree</option>
                    <option>Agree</option>
                    <option>Disagree</option>
                    <option>Strongly Disagree</option></select>
                    <option>NA</option></select></div></div>`
                }).join("")
             
            })
            console.log(g)
           
                 document.getElementById('pe360SampleQuestionairre').innerHTML += `<div ><p class="cat-hide"><b>${g}</b></p>${qs}</div>`
             
          })
          
      }


      const addCustomQuestionPE360 = ()=>{
        document.getElementById('pe360SampleQuestionairre').innerHTML = '';
        const itemToAdd =  document.getElementById('customQuestionHtmlPE360').value;
        const questionsDiv = document.getElementById('pe360Questions');
        const index = makeid(4);
        console.log(itemToAdd)
    if(document.getElementById('pe360CatSelect').options[document.getElementById('pe360CatSelect').selectedIndex].text != 'CUSTOM CATEGORY'){
        if(questionsDiv.contains(document.getElementById(catFinder))){
      
            if(document.getElementById(catFinder).innerHTML.indexOf(itemToAdd) > -1){
                alert('This question has already been added.')
            } else{
            document.getElementById(catFinder).innerHTML += `<p class="cat-hide" id=${index}>${itemToAdd}<span class='delete-btn icon icon--trash--can' onclick="removeQuestion('${index}', '${item+'Div'}')">  </span></p>`
            employeeObj.questionsToSendArr.push({
                index: index,
                category: document.getElementById('pe360CatSelect').options[document.getElementById('pe360CatSelect').selectedIndex].text.toUpperCase(),
                question: itemToAdd,
                div: catFinder,
                itemId: makeid(7),
                answer: ''
            })
            console.log(employeeObj)
            }
           
        } 
        //  if (document.getElementById('pe360CatSelect').options[document.getElementById('pe360CatSelect').selectedIndex].text != 'CUSTOM CATEGORY'){
        //     let cat = document.getElementById('pe360CatSelect');
        //     console.log('this')
        //     document.getElementById('pe360Questions').innerHTML += `<div id=${cat.value}><p ><b>${cat.options[cat.selectedIndex].text.toUpperCase()}</b><span onclick="removeCat('${cat.value}')"> </span></p> <p id=${index}>${itemToAdd}<span onclick="removeQuestion('${index}', '${item+'Div'}')"> </span></p></div>`
      
        // }
        else {
            document.getElementById('pe360Questions').innerHTML += `<div id=${catFinder}><p ><b>${document.getElementById('pe360CatSelect').options[document.getElementById('pe360CatSelect').selectedIndex].text.toUpperCase()}</b><span onclick="removeCat('${catFinder}')"> </span></p> <p id=${index}>${itemToAdd}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${index}', '${item+'Div'}')"> </span></p></div>`
            employeeObj.questionsToSendArr.push({
                index: index,
                category: document.getElementById('pe360CatSelect').options[document.getElementById('pe360CatSelect').selectedIndex].text.toUpperCase(),
                question: itemToAdd,
                div: catFinder,
                itemId: makeid(7),
                answer: ''
            })
            console.log(employeeObj)
        }
    } else {
        let cat = document.getElementById('customCatpe360').value;
        if(questionsDiv.contains(document.getElementById(cat+'Div'))){
      
            if(document.getElementById(cat+'Div').innerHTML.indexOf(itemToAdd) > -1){
                alert('This question has already been added.')
            } else{
            document.getElementById(cat+'Div').innerHTML += `<p class="cat-hide" id=${index}>${itemToAdd}<span class='delete-btn icon icon--trash--can' onclick="removeQuestion('${index}', '${item+'Div'}')"> </span></p>`
            employeeObj.questionsToSendArr.push({
                index: index,
                category: cat.toUpperCase(),
                question: itemToAdd,
                div: cat+'Div',
                itemId: makeid(7),
                answer: ''
            })
            console.log(employeeObj)
            }
           
        }   else {
            
            console.log(cat.toUpperCase())
            document.getElementById('pe360Questions').innerHTML += `<div id=${cat+'Div'}><p class="cat-hide" ><b>${cat.toUpperCase()}</b><span onclick="removeCat('${cat+'Div'}')"> </span></p> <p id=${index}>${itemToAdd}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${index}', '${cat+'Div'}')"> </span></p></div>`
            employeeObj.questionsToSendArr.push({
                index: index,
                category: cat.toUpperCase(),
                question: itemToAdd,
                div: cat+'Div',
                itemId: makeid(7),
                answer: ''
            })
            console.log(employeeObj)
        }
        
    
    }
    document.getElementById('customQuestionPE360').style.display = 'none';
    document.getElementById('customCatpe360').value = '';
    document.getElementById('customQuestionHtmlPE360').value = '';
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
                return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  >
                <select class="form-select">
                <option>---</option>
                <option>Strongly Agree</option>
                <option>Agree</option>
                <option>Disagree</option>
                <option>Strongly Disagree</option>
                <option>NA</option></select></div></div>`
            }).join("")
         
        })
       
             document.getElementById('pe360SampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
         
      })
      }



const set360Data = (event)=>{
    let value =  event.target.value;
    let name =  event.target.name;

    if (name == 'inputName360'){
      employeeObj.employeeName = value;
      document.getElementById('outputFullname360').innerHTML = value;
  }

  if (name == 'inputDepartment360'){
      employeeObj.department = value;
      document.getElementById('outputDepartment360').innerHTML = value;
  }

  if (name == 'inputReviewPeriod360'){
      employeeObj.reviewPeriod = value;
      document.getElementById('outputReviewPeriod360').innerHTML = value;
  }
}
