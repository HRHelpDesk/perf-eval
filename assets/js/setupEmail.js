let senderObj = 
{
        senderName: '',
        senderTitle: '',
        senderEmail:'',
        senderCC: '',
}
let successArr = [];
const sendEmail = ()=>{
        let empJSON = JSON.stringify(employeeObj)
        let referenceNumber = makeid(12)
        let sendToDB = $.post('http://localhost:3004/setup-eval', {c:empJSON, d:JSON.stringify(senderObj), referenceNumber: referenceNumber}, (d)=>{
                console.log(d)
                        })
        employeeArr.forEach(i=>{
            
                Email.send({
                        SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                        To : i.email,
                        From : senderObj.senderEmail,
                        CC: senderObj.senderCC,
                       
                           Subject : `${senderObj.senderName} - ${senderObj.senderTitle} has requested a Performance Evaluation for ${employeeObj.employeeName}.`,
                           Body : `<a href='https://masonmerrell22.github.io/perf-eval/EPEoutput.html?&d=${referenceNumber}'>Click to go</a>`
                          
                       })
                       successArr.push('sent')
                       console.log(empJSON)
                       
        })

        return confirm()
       
        
}


const confirm = ()=>{
        if (successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                document.getElementById('epeHub').style.display = 'none';
        }
}


const returnToSender = ()=>{
        let emailOk;
        let sendToDB = $.post('http://localhost:3004/add-result', {c: JSON.stringify(anObjArr), refNo:initialRef}, (d)=>{
                emailOk = true;
                        })


     if (emailOk = true){
        Email.send({
                SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                To : anObjArr.senderEmail,
                CC: anObjArr.senderCC,
                From : 'support@helpdeskforhr.com',
                
               
                   Subject : `Evaluation Completed by Mason`,
                   Body : `<a href='http://127.0.0.1:5503/views/download-document.html?c=${initialRef}&d=${anObjArr.referenceNumber}'>Click to download the completed evaluation.</a>`
                  
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

