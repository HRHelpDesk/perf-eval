let senderObj = 
{
        senderName: '',
        senderTitle: '',
        senderEmail:'',
        senderCC: '',
}
let successArr = [];
let sentConfirmationToSender = false;

let referenceNumber = makeid(12)
const sendEmail = ()=>{
        let empJSON = JSON.stringify(employeeObj)
let JSONemp  = JSON.stringify(employeeArr)


       

        let sendToDB = $.post('https://pe-apis.herokuapp.com/setup-eval', {c:empJSON, d:JSON.stringify(senderObj), referenceNumber: referenceNumber, epmArr: JSONemp}, (d)=>{
                console.log(d)
                        })
                employeeArr.forEach(i=>{
        
                        Email.send({
                        SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                        To : i.email,
                        From : senderObj.senderEmail,
                        CC: senderObj.senderCC,
                       
                           Subject : `${senderObj.senderName} - ${senderObj.senderTitle} has requested a Performance Evaluation for ${employeeObj.employeeName}.`,
                           Body : `Hi ${i.fName}
                           <a href='https://helpdeskforhr.com/perf-eval-output?&d=${referenceNumber}&c=${i.id}'>Click to go</a>`
                          
                       })
                       successArr.push('sent')
                       console.log(empJSON)
                       
        })

        
              
         confirm()

    
       
        
}




const confirm = ()=>{
        let sendConfirmationEmail = $.post('https://pe-apis.herokuapp.com/send-confirmation', {reNo: referenceNumber, senderName: senderObj.senderName}, (d)=>{
                console.log(d)
                sentConfirmationToSender = true
                        })
                        console.log(sendConfirmationEmail)
        if (sentConfirmationToSender == true && successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                document.getElementById('epeHub').style.display = 'none';
        }
}


const returnToSender = ()=>{
        let emailOk;
        let sendToDB = $.post('https://pe-apis.herokuapp.com/add-result', {c: JSON.stringify(anObjArr), refNo:initialRef}, (d)=>{
                emailOk = true;
                        })


     if (emailOk = true){
        Email.send({
                SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                To : anObjArr.senderEmail,
                CC: anObjArr.senderCC,
                From : 'support@helpdeskforhr.com',
                
               
                   Subject : `Evaluation Completed by Mason`,
                   Body : `<a href='https://helpdeskforhr.com/perf-eval-download-doc?c=${initialRef}&d=${anObjArr.referenceNumber}'>Click to download the completed evaluation.</a>`
                  
               })

               console.log('email sent.')
            
        }
}

const confirmReturn = ()=>{
        if (successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                document.getElementById('epeHub').style.display = 'none';
        }
}

