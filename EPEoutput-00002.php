<?php
/**
 * Template Name: Perf-eval-output .000000002
 */
?>


<!DOCTYPE>
<html>

<head>
    <link href="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/tabs.css" rel="stylesheet"/>
        <link href="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/style.css" rel="stylesheet"/>
        <link href="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/cards.css" rel="stylesheet"/>
        <link href="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/upload-form.css" rel="stylesheet"/>
        <link href="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/footer.css" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    </head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/docxtemplater/3.28.6/docxtemplater.js"></script>
        <script src="https://unpkg.com/pizzip@3.1.1/dist/pizzip.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
        <script src="https://unpkg.com/pizzip@3.1.1/dist/pizzip-utils.js"></script>
        
<script src='https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/data/createDocument.js'></script>

</head>
<script>
    function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}
function generate() {
    loadFile(
        "https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/example.docx",
        function (error, content) {
            if (error) {
                throw error;
            }
            var zip = new PizZip(content);
            var doc = new window.docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
            doc[0].render(anObjArr);

            var out = doc[0].getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                // compression: DEFLATE adds a compression step.
                // For a 50MB output document, expect 500ms additional CPU time
                compression: "DEFLATE",
            });
            // Output the document using Data-URI
            saveAs(out, "output.docx");
        }
    );
}




function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

var url = new URL(window.location.href);
var initialRef = url.searchParams.get("d");
let c;
let anObjArr = {
        referenceNumber: '',
        emp_Name: '',
        employee_id_no : '',
        job_title: '',
        department: '',
        rev_sup:'',
        rev_period: '',
        per_sup:'',
        t_o_p: '',
        part_two_a: '',
        overall_rating: '',
        part_4_a:'',
        part_4_b:'',
        categories:[],
        senderEmail:'',
        signature: '',
        date_sign: ''
    }
  let rsp = $.get(`https://pe-apis.herokuapp.com/find-evaluation?refno=${initialRef}`, (data)=>{
console.log(data)
 c = data
 console.log(c[0].employeeName)


 anObjArr = {
     
    referenceNumber: makeid(15),
        emp_Name: c[0].employeeName,
        employee_id_no : c[0].employeeId,
        job_title: c[0].jobTitle,
        department: c[0].department,
        rev_sup:c[0].reviewingSupervisor,
        rev_period: c[0].reviewPeriod,
        per_sup: c[0].periodSupervised,
        t_o_p: c[0].timeInPosition,
        part_two_a: '',
        overall_rating: '',
        part_4_a:'',
        part_4_b:'',
        categories:[],
        senderEmail: c[0].senderEmail,
        signature: '',
        date_sign: ''
    }
 
   
setTimeout(()=>{





//Emmployee Information
setTimeout(()=>{
document.getElementById('outputName').innerHTML = c[0].employeeName;
document.getElementById('outputEmployeeId').innerHTML = c[0].employeeId;
document.getElementById('outputJobTitle').innerHTML = c[0].jobTitle;
document.getElementById('outputDepartment').innerHTML = c[0].department;
document.getElementById('outputReviewingSupervisor').innerHTML = c[0].reviewingSupervisor;
document.getElementById('outputReviewPeriod').innerHTML = c[0].reviewPeriod;
document.getElementById('outputPeriodSupervised').innerHTML = c[0].periodSupervised;
document.getElementById('outputTimeInPosition').innerHTML = c[0].timeInPosition;
},1000)

console.log(c)

// Render Criteria
function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
              }
           
   
              console.log(c[0].questionsToSendArr)
  c[0].questionsToSendArr.push()
        let arrCats =  c[0].questionsToSendArr.map(i=> {return i.category})
        console.log(arrCats)
        var unique = arrCats.filter(onlyUnique);
     
        console.log(unique)
     unique.map(g=>{
       
        let cat = g;
         let qs = [];
       
         c[0].questionsToSendArr.map(i=>{
            let qarr =  c[0].questionsToSendArr.filter(i => cat.includes(i.category))
         
            qs = qarr.map(i=>{
           return `<div><div style="display:inline-block; width:80%;"><p  id='${i.index}'>${i.question}</p></div> <div style="display:inline-block; width:17%; margin-left:15px;"  ><select onchange='addAnswer("${i.itemId}", event)' name='${i.div}' class="form-select"><option>---</option> 
           <option value="Exceptional Performance">Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
           <option value='Exceeds Expectations'>Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
           <option value='Fully Meets Expectations'>Fully Meets Expectations (commendable performance that meets goals)</option>
           <option value='Partially Meets Expectations'>Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
           <option value='Does Not Meet Requirements'>Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option></select></div></div>`
            }).join("")
         
        })
       
             document.getElementById('sampleQuestionairre').innerHTML += `<div ><p><b>${g}</b></p>${qs}</div>`
         
      })



//Goal Setting
if (c[0].section4){
       document.getElementById('showPartFour').innerHTML = ` <div>
     
       <hr>
       <p><b>PART FOUR A: PERFORMANCE GOALS FOR NEXT REVIEW PERIOD</b></p>
       <hr>
     <p>Supervisor identifies goals for the upcoming review period to ensure continued contributions from the employee for success within the organization.</p>
        <textarea onkeyup='textAreaData(event)' name='part4a' class="questions-div"></textarea>
   </div>

   <div>
     <hr>
     <p><b>PART FOUR B: GOALS FOR/AND PROGRESS ON PROFESSIONAL DEVELOPMENT</b></p>
     <hr>  
     <p>Supervisor lists goals related to the employee’s professional (or managerial) development. Consider
             the employee’s performance improvement needs and action plan, training recommendations, future
             goals and expectations.</p>
      <textarea onkeyup='textAreaData(event)' name='part4b' class="questions-div"></textarea>
 </div>`
   } else {
    document.getElementById('showPartFour').innerHTML = ``
   }
    }, 3000)
})
function textAreaData(event){
    let name = event.target.name;
    let value = event.target.value;
    console.log(value)
    if(name == 'part2A'){
        anObjArr.part_two_a = value;
        console.log(anObjArr)
    }

    if(name == 'part3'){
        anObjArr.overall_rating = value;
        console.log(anObjArr)
    }

    if(name == 'part4a'){
        anObjArr.part_4_a = value;
        console.log(anObjArr)
    }

    if(name == 'part4b'){
        anObjArr.part_4_b = value;
        console.log(anObjArr)
    }

    if(name == 'signature'){
        anObjArr.signature = value;
        console.log(anObjArr)
    }

    if(name == 'date-sign'){
        anObjArr.date_sign = value;
        console.log(anObjArr)
    }
}

const addAnswer = (a,event)=>{
    let answer = event.target.value;
    var foundIndex = c[0].questionsToSendArr.findIndex(i => i.itemId === a);
console.log(name);
console.log(c[0].questionsToSendArr)

    c[0].questionsToSendArr[foundIndex].answer = answer;

    console.log(c[0].questionsToSendArr)
    var catIndex = anObjArr.categories.findIndex(i => i.category === c[0].questionsToSendArr[foundIndex].category);
    let arrFilter = anObjArr.categories.filter(i=> i.category.includes(c[0].questionsToSendArr[foundIndex].category))
let questionOnly =  {
                    question: c[0].questionsToSendArr[foundIndex].question,
                    resp: c[0].questionsToSendArr[foundIndex].answer
                }
let categoryObj ={
            category: c[0].questionsToSendArr[foundIndex].category,
            criteria:[
                {
                    question: c[0].questionsToSendArr[foundIndex].question,
                    resp: c[0].questionsToSendArr[foundIndex].answer
                }
            ]
        }
        console.log(arrFilter)
    if(anObjArr.categories.length == 0){
        anObjArr.categories.push(categoryObj)
        console.log(anObjArr)
    } else{
       if(arrFilter.length == 0){
        anObjArr.categories.push(categoryObj)
        console.log(anObjArr) 
       } else{
        anObjArr.categories[catIndex].criteria.push(questionOnly)
        console.log(anObjArr) 
       }
    }

}



   
</script>
<body>
  <!--Top Bar-->
  <div class="topnav">
    <img src='https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/css/img/PECLogo.png' style="padding: 10px; margin-left: 20px;" width="450px" height="auto"/>
     
   </div>
<!---->
<div class="epe-zone">
        <div style="text-align: left; padding: 50px;">
    
            <div class="form-group row">
                <div class="col-md-6">
                    <label for="inputReviewingSupervisor"><b> Name</b></label>
                    <p id="outputName">First Name</p>
                </div>
                <div class="col-md-6">
                    <label for="inputReviewPeriod"><b>Employee ID</b></label>
                    <p id="outputEmployeeId">Employee ID</p>
                </div>
            </div>
    
            <div class="form-group row">
                <div class="col-md-6">
                    <label for="inputReviewPeriod"><b>Job Title</b></label>
                    <p id="outputJobTitle">Job Title</p>
                </div>
                <div class="col-md-6">
                    <label for="inputReviewingSupervisor"><b>Department</b></label>
                    <p id="outputDepartment">Department</p>
                </div>
             
            </div>
    
            <div class="form-group row">
                <div class="col-md-6">
                    <label for="inputReviewingSupervisor"><b>Reviewing Supervisor</b></label>
                    <p id="outputReviewingSupervisor"> </p>
                </div>
                <div class="col-md-6">
                    <label for="inputReviewPeriod"><b>Review Period</b></label>
                    <p id="outputReviewPeriod"> </p>
                </div>
            </div>
    
            <div class="form-group row">
                <div class="col-md-6">
                    <label for="inputReviewingSupervisor"><b>Period Supervised by Reviewer</b></label>
                    <p id="outputPeriodSupervised">Test Name</p>
                </div>
                <div class="col-md-6">
                    <label for="inputReviewPeriod"><b>Time in Position</b></label>
                    <p id="outputTimeInPosition">Test Period</p>
                </div>
            </div>
            <hr>
            <p><b>PART ONE: REVIEW OF PERFORMANCE ELEMENTS</b></p>
            <hr>
            <div id='sampleQuestionairre'>
    
            </div>
    
            <div>
             
                <hr>
                <p><b>PART TWO: SUMMARY REVIEW OF EMPLOYEE PERFORMANCE</b></p>
                <hr>
              <p>Supervisor describes employee’s major assignments and accomplishments, key strengths, any
                performance shortfalls, and other performance elements that characterize the employee’s performance
                during the review period. Please include examples or supporting information below.</p>
                 <textarea onkeyup="textAreaData(event)" name="part2A" class="questions-div"></textarea>
            </div>
      
            <div>
              <hr>
              <p><b>PART THREE: OVERALL PERFORMANCE RATING</b></p>
              <hr>  
              <select onchange="textAreaData(event)" name="part3" class="form-select">
                <option>---</option>
                <option value="Exceptional Performance">Exceptional Performance (outstanding achievements that far exceed goals in all performance elements)</option>
                <option value="Exceeds Expectations">Exceeds Expectations (performance that consistently goes beyond meeting goals)</option>
                <option value="Fully Meets Expectations">Fully Meets Expectations (commendable performance that meets goals)</option>
                <option value="Partially Meets Expectations">Partially Meets Expectations (inconsistent aspects of performance requiring improvement to meet some goals)</option>
                <option value="Does Not Meet Requirements">Does Not Meet Requirements (goals unmet, skills not demonstrated, improvement needed)</option>
            </select>
          </div>
    
          <div  id="showPartFour"></div>
          <div class="col-md-10 mx-auto">
            <div class="form-group row">
                <div class="col-md-6">
                    <label for="inputFirstname"> Signature:</label>
                    <input onkeyup="textAreaData(event)" style="font-family:cursive" type="text" class="form-control" name="signature" placeholder="Full Name">
                </div>
                <div class="col-md-6">
                    <label for="inputLastname">Date:</label>
                    <input type="text" onkeyup="textAreaData(event)" class="form-control" name="date-sign" placeholder="Date">
                </div>
            </div>
    </div>
        
            </div>
           
            <button onclick="returnToSender()">Send Back</button>
        </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script><script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/upload.js"></script>
            <script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/navigation.js"></script>
            <script src='https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/pizzip.js'></script>
            <script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/addEmployee.js"></script>
    <script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/data/createDocument.js"></script>
    <script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/setupEmail-1.js"></script>
    <script src="https://helpdeskforhr.com/wp-content/themes/thrive-theme-child/perf-eval-new/assets/js/smtp.js"></script>
</body>
</html>
