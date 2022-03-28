const questionsUE = [
    {
        index: '01',
        question:'Does your supervisor treat you fairly? ',
        category:''
    },
    {
        index: '02',
        question:'Does your supervisor have the job knowledge necessary to develop your skills? ',
        category:''
    },
    {
        index: '03',
        question:'Does your supervisor provide you with access to the information and knowledge that you need if you are to do your job effectively? ',
        category:''
    },
    {
        index: '04',
        question:'Does your supervisor take the time to teach you things that you need to know, but that you presently do not know?',
        category:''
    },
    {
        index: '05',
        question:'Are you satisfied with your access to your supervisor?',
        category:''
    },
    {
        index: '06',
        question:'Are you satisfied with the amount of feedback you receive from your supervisor?',
        category:''
    },
    {
        index: '07',
        question:'Does your supervisor keep confidential matters confidential?',
        category:''
    },
    {
        index: '08',
        question:'Does your supervisor create an open, relaxed, and enjoyable working environment?',
        category:''
    },
    {
        index: '09',
        question:'Does your supervisor encourage teamwork and group problem solving?',
        category:''
    },
    {
        index: '10',
        question:'Does your supervisor solicit your opinions when formulating plans for the unit?',
        category:''
    },
    {
        index: '11',
        question:'Does your supervisor behave in a professional manner suitable to his or her position?',
        category:''
    },
    {
        index: '12',
        question:'Does your supervisor demonstrate compliance with the Customer First philosophies?',
        category:''
    },
    {
        index: '13',
        question:'Does your supervisor demonstrate an appreciation of the fact that the workforce is made up of people with a great diversity of values, opinions, backgrounds, and goals?',
        category:''
    },
    {
        index: '14',
        question:'Does your supervisor show an interest in your career development?',
        category:''
    },
    {
        index: '15',
        question:'Does your supervisor communicate policies, practices, and procedures in a way that is easy to understand?',
        category:''
    },
    {
        index: '16',
        question:'Are you satisfied overall with the support provided by your supervisor?',
        category:''
    },
    {
        index: '17',
        question:'Does your supervisor demonstrate the importance of our sales and service commitment to our customers?',
        category:''
    }

]

const showCustomQuestionUE = ()=>{
    document.getElementById('customQuestionUE').style.display = 'block';
    }


const hideCustomQuestionUE = ()=>{
    document.getElementById('customQuestionUE').style.display = 'none';
    }


    questionsUE.map(i=>{
        document.getElementById('ueQuestionSelect').innerHTML += `<option value=${i.index}>${i.question}</option>`
    })


    const addQuestionUE = ()=>{
        document.getElementById('ueSampleQuestionairre').innerHTML = '';
        console.log(document.getElementById('ueQuestionSelect').value)
         const itemToAdd =  questionsUE.filter(i=> document.getElementById('ueQuestionSelect').value == i.index)
         const questionsDiv = document.getElementById('ueQuestions')
   
         console.log(itemToAdd[0].question)
         console.log(questionsDiv.textContent)
    
         if(questionsDiv.innerHTML.includes(itemToAdd[0].question)){
             if(questionsDiv.innerHTML.indexOf(itemToAdd[0].question) > -1){
                 alert('This item has already been added.')
             } else{
                document.getElementById('ueSampleQuestionairre').innerHTML = '';
             document.getElementById(itemToAdd[0].div).innerHTML += `<p class="cat-hide" id=${itemToAdd[0].index}>${itemToAdd[0].question}<span class='delete-btn hide-icon icon icon--trash--can'  onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> </span></p>`
             }
         } else {
            document.getElementById('ueSampleQuestionairre').innerHTML = '';
             document.getElementById('ueQuestions').innerHTML += ` <p id=${itemToAdd[0].index}>${itemToAdd[0].question}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${itemToAdd[0].index}', '${itemToAdd[0].div}')"> </span></p>`
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
                    <option>Never</option>
                    <option>Occasionally</option>
                    <option>Sometimes</option>
                    <option>Usually</option>
                    <option>Always</option></select></div></div>`
                }).join("")
             
            })
           
                 document.getElementById('ueSampleQuestionairre').innerHTML += `<div >${qs}</div>`
             
          })
          
      }


      const addCustomQuestionUE = ()=>{
        document.getElementById('ueSampleQuestionairre').innerHTML = '';
        const itemToAdd =  document.getElementById('customQuestionHtmlUe').value;
        const questionsDiv = document.getElementById('ueQuestions');
        const index = makeid(4);
        
        console.log(itemToAdd)
    if(questionsDiv.innerHTML.includes(itemToAdd)){
    
                alert('This question has already been added.')
            } else{
                questionsDiv.innerHTML += `<p class="cat-hide" id=${index}>${itemToAdd}<span class='delete-btn icon icon--trash--can' onclick="removeQuestion('${index}', '${item+'Div'}')">  </span></p>`
            employeeObj.questionsToSendArr.push({
                index: index,
                category: '',
                question: itemToAdd,
                div: catFinder,
                itemId: makeid(7),
                answer: ''
            })
            console.log(employeeObj)
            }
           
        

      
   
    
    
    document.getElementById('customQuestionDivUE').style.display = 'none';
   
    document.getElementById('customQuestionHtmlUe').value = '';
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
                <option>Never</option>
                <option>Occasionally</option>
                <option>Sometimes</option>
                <option>Usually</option>
                <option>Always</option></select></div></div>`
            }).join("")
         
        })
       
             document.getElementById('ueSampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
         hideCustomQuestionUE()
         console.log(employeeObj)
      })
      }


      //USE Suggested Questions

      const useSuggestedQuestionsUe = ()=>{
        if (window.confirm("This action will clear the current criteria and replace with suggested criteria. Are you sure you would like to do this?") == true) {
         
               
              questionsUE.map(i=>{
  
                document.getElementById('ueQuestions').innerHTML += `<p id='${i.index}'>${i.question}<span class='delete-btn hide-icon icon icon--trash--can' onclick="removeQuestion('${i.index}')"> </span></p>`
            
              })
    
              questionsUE.map(i=>{
                   employeeObj.questionsToSendArr.push({
                    index: i.index,
                    category: i.category,
                    question: i.question,
                    div: i.div,
                    itemId: makeid(7),
                    answer: ''
                })
              })
              document.getElementById('ueSampleQuestionairre').innerHTML = '';
          
               
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
               <option>Never</option>
               <option>Occasionally</option>
               <option>Sometimes</option>
               <option>Usually</option>
               <option>Always</option></select></div></div>`
                }).join("")
             
            })
           
                 document.getElementById('ueSampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
                 console.log(employeeObj)
          })
       
        }
      
      
      }


      // SET DATA

      const setUeData = (event)=>{
        let value =  event.target.value;
        let name =  event.target.name;
    
        if (name == 'inputNameUe'){
          employeeObj.employeeName = value;
          document.getElementById('outputFullnameUe').innerHTML = value;
      }
    
      if (name == 'inputDepartmentUe'){
          employeeObj.department = value;
        
      }
    
      if (name == 'inputReviewPeriodUe'){
          employeeObj.reviewPeriod = value;
          document.getElementById('outputReviewPeriodUe').innerHTML = value;
      }
    }
    




