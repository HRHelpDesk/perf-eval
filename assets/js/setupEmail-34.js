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
        
       
        let empJSON = JSON.stringify(employeeObj)
let JSONemp  = JSON.stringify(employeeArr)


       
let ok;
       $.post('http://localhost:3004/setup-eval', {c:empJSON, d:JSON.stringify(senderObj), referenceNumber: referenceNumber, epmArr: JSONemp}, (data, err)=>{
               if(data){
                console.log(data)
                if(data === true){
                document.getElementById('epeHub').style.display = 'none';
                document.getElementById('360Hub').style.display = 'none';
                
        
                document.getElementById('successPage').style.display = 'block';
               }
       
               } else{
                   
                  console.log(err)
               }
               
            
        })
   
       
                      
              
       

    
  
}     
        
}




const confirm = (a)=>{
 
       if(a){
                document.getElementById('epeHub').style.display = 'none';

                document.getElementById('successPage').style.display = 'block';

       }       
        
}


const returnToSender = (a)=>{
        let emailOk;
        let sendToDB = $.post('http://localhost:3004/add-result', {c: JSON.stringify(anObjArr), refNo:initialRef, type : a}, (d)=>{
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
                   Body : `<a href='https://helpdeskforhr.com/perf-eval-download-doc?c=${initialRef}&d=${anObjArr.referenceNumber}&type=${a}'>Click to download the completed evaluation.</a>`
                  
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

