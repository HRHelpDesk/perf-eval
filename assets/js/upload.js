let objArr = []
var csvParsedArray = [];


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

$(document).on('click','#btnUploadFile',function(){
  if ($("#fileToUpload").get(0).files.length == 0) {
    alert("Please upload the file first.");
    return;
  }
  let fileUpload = $("#fileToUpload").get(0);
  let files = fileUpload.files;
  if (files[0].name.toLowerCase().lastIndexOf(".csv") == -1) {
    alert("Please upload only CSV files");
    return;
  }
  let reader = new FileReader();
  let bytes = 50000;
  reader.onloadend = function (evt) {
    let lines = evt.target.result;
    if (lines && lines.length > 0) {
      let line_array = CSVToArray(lines);
      if (lines.length == bytes) {
        line_array = line_array.splice(0, line_array.length - 1);
      }
      var columnArray = [];
    
    }
  }
  let blob = files[0].slice(0, bytes);
  reader.readAsBinaryString(blob);
});
function CSVToArray(strData, strDelimiter) {
  strDelimiter = (strDelimiter || ",");
  let objPattern = new RegExp(
    (
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),
    "gi"
    );
  let arrData = [[]];
  let arrMatches = null;
  while (arrMatches = objPattern.exec(strData)) {
    let strMatchedDelimiter = arrMatches[1];
    let strMatchedValue = [];
    if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
      arrData.push([]);
    }
    if (arrMatches[2]) {
      strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"),"\"");
    } else {
      strMatchedValue = arrMatches[3];
    }
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  arrData.forEach(i=>{
    if(i[0] === '	ï»¿First Name'){

    } else{
      employeeArr.push({
          id: makeid(8),
          fName: i[0],
          lName: i[1],
          email: i[2]
      })
    }
  })


  console.log(employeeArr)
employeeArr.shift()
  employeeArr.map(i =>{
    document.getElementById('employeeTable').innerHTML +=` <tr>
<th scope="row">${i.id}</th>
<td>${i.fName}</td>
<td>${i.lName}</td>
<td>${i.email}<span class='delete-btn' onclick='deleteEmployee("${i.id}")'>delete</span></td>
</tr>`;
localStorage.setItem('PE-Employee-List',JSON.stringify(employeeArr))

  })

document.getElementById('employeeTable').innerHTML += ``;



  
}

