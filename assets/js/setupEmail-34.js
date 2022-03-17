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
     
        if(window.confirm("Are you sure your ready to send? Emails will be immediately sent to your list.") == true){
        
        document.getElementById('epeHub').style.display = 'none';
        document.getElementById('loadingDiv').style.display = 'block';
        let empJSON = JSON.stringify(employeeObj)
let JSONemp  = JSON.stringify(employeeArr)


       

       $.post('https://pe-apis.herokuapp.com/setup-eval', {c:empJSON, d:JSON.stringify(senderObj), referenceNumber: referenceNumber, epmArr: JSONemp}, (err, data)=>{
               if(err){
                       console.log(err)
               } else{
                       console.log(data)
                       confirm()
               }
                        })
   

        
              
       

    
  
}     
        
}




const confirm = ()=>{
 
        if (successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                
        }
}


const returnToSender = ()=>{
        let emailOk;
        let sendToDB = $.post('https://pe-apis.herokuapp.com/add-result', {c: JSON.stringify(anObjArr), refNo:initialRef}, (d)=>{
                emailOk = true;
                        })


     if (emailOk = true){
             //  1eb316ac-0aee-4c6c-b398-e2b8b78cd84d
        Email.send({
                Host : "smtp.elasticemail.com",
                Username : "support@helpdeskforhr.com",
                Password : "112C97D6CCB95C5D7CC533AA389B6BC3FEDB",
                To : anObjArr.senderEmail,
                From: 'support@helpdeskforhr.com',
                CC: anObjArr.senderCC,
            
                
               
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

