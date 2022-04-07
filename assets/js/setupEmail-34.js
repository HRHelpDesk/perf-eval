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
        let sendToDB = $.post('http://localhost:3004/add-result', {c: JSON.stringify(anObjArr), refNo:initialRef, type : a, senderObj: senderObj}, (d)=>{
                emailOk = true;
                console.log(d)
                if(d){
                        document.getElementById('evaluationStation').style.display = 'none';
                        document.getElementById('completeMessage').style.display = 'block';
                }
                        })


     
}

const confirmReturn = ()=>{
        if (successArr.length == employeeArr.length){
                document.getElementById('successPage').style.display = 'block';

                document.getElementById('epeHub').style.display = 'none';
        }
}

