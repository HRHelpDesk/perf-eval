let employeeArr = [];

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

const AddEmployee = ()=>{
let obj = {
    id: makeid(8),
    fName: document.getElementById('employeeFName').value,
    lName: document.getElementById('employeeLName').value,
    email: document.getElementById('employeeEmail').value
}

employeeArr.push(obj)
document.getElementById('employeeTable').innerHTML =``;

employeeArr.map(i=>{
    document.getElementById('employeeTable').innerHTML += ` <tr>
    <th scope="row">${i.id}</th>
    <td>${i.fName}</td>
    <td>${i.lName}</td>
    <td>${i.email}<span class='delete-btn icon icon--trash--can' onclick='deleteEmployee("${i.id}")'>&nbsp&nbsp </span></td>
  </tr>`
})
console.log(employeeArr)
localStorage.setItem('PE-Employee-List',JSON.stringify(employeeArr))
    
}



const deleteEmployee = (id)=>{

 
    var index = employeeArr.findIndex(function(o){
        return o.id === id;
        
    })
    employeeArr.splice(index, 1);
localStorage.setItem('PE-Employee-List',JSON.stringify(employeeArr))

console.log(index);
document.getElementById('employeeTable').innerHTML =``;
employeeArr.map(i=>{
    document.getElementById('employeeTable').innerHTML += ` <tr>
    <th scope="row">${i.id}</th>
    <td>${i.fName}</td>
    <td>${i.lName}</td>
    <td>${i.email}<span class='icon icon--trash--can' onclick='deleteEmployee("${i.id}")'>&nbsp&nbsp </span></td>
  </tr>`
})
}


const deleteCSVEmployee = (id)=>{

 
    var index = employeeArr.findIndex(function(o){
        return o.id === id;
        
    })
    employeeArr.splice(index, 1);
localStorage.setItem('PE-Employee-List',JSON.stringify(employeeArr))

console.log(index);
document.getElementById('employeeCSVTable').innerHTML =``;
employeeArr.map(i=>{
    document.getElementById('employeeCSVTable').innerHTML += ` <tr>
    <th scope="row">${i.id}</th>
    <td>${i.fName}</td>
    <td>${i.lName}</td>
    <td>${i.email}<span class='delete-btn' onclick='deleteCSVEmployee("${i.id}")'>delete</span></td>
  </tr>`
})
}


