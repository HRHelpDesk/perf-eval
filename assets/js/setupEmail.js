let senderObj = 
{
        senderName: '',
        senderTitle: '',
        senderEmail:'',
        senderCC: '',
}
let successArr = [];
const sendEmail = ()=>{
     
        employeeArr.forEach(i=>{
                let empJSON = JSON.stringify(employeeObj)
                Email.send({
                        SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                        To : i.email,
                        From : senderObj.senderEmail,
                        CC: senderObj.senderCC,
                       
                           Subject : `${senderObj.senderName} - ${senderObj.senderTitle} has requested a Performance Evaluation for ${employeeObj.employeeName}.`,
                           Body : `<a href='https://masonmerrell22.github.io/perf-eval/EPEoutput.html?c=${empJSON}&d=${JSON.stringify(senderObj)}'>Click to go</a>`
                          
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
        Email.send({
                SecureToken : "1eb316ac-0aee-4c6c-b398-e2b8b78cd84d",
                To : anObjArr.senderEmail,
                CC: senderObj.senderCC,
                From : 'support@helpdeskforhr.com',
                
               
                   Subject : `Evaluation Completed by Mason`,
                   Body : `<a href='https://masonmerrell22.github.io/perf-eval/views/download-document.html?c=${JSON.stringify(anObjArr)}'>Click to download the completed evaluation.</a>`
                  
               })
            
               
}

const confirmReturn = ()=>{
        if (successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                document.getElementById('epeHub').style.display = 'none';
        }
}

