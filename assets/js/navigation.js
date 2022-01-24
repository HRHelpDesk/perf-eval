const goToCSVSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('uploadCSVSection').style.display = 'block';
  }
  
  const goToInputSection = ()=>{
    document.getElementById('startingSection').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('inputNamesSection').style.display = 'block';
  
     employeeArr =JSON.parse(localStorage.getItem('PE-Employee-List'))
  console.log(employeeArr)
     employeeArr.map(i=>{
  document.getElementById('employeeTable').innerHTML += ` <tr>
  <th scope="row">${i.id}</th>
  <td>${i.fName}</td>
  <td>${i.lName}</td>
  <td>${i.email}<span class='delete-btn' onclick='deleteEmployee("${i.id}")'>delete</span></td>
  </tr>`
  })
  }

  let pageRenderOne = `<div style="padding: 20px 100px 0px 100px; text-align: center;">
<div id="Container"
style="padding-bottom:56.25%; position:relative; display:block; width: 100%"> 

<br></br>
<p style="font-size: 24px; font-weight: bold;">Select the type of evaluation you would like to perform:</p>
<div class="cards">

<div class="card card-color">
<p class="card-title">EMPLOYEE PERFORMANCE EVALUATION </p>
 
  <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
  <p class="card__apply">
    <a class="card__link" onclick="EPE()">Click to Start<i class="fas fa-arrow-right"></i></a>
  </p>
</div>

<div class="card card-color">
  <p class="card-title">360 PERFORMANCE EVALUATION </p>
     
      <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p class="card__apply">
        <a class="card__link"onclick="PE360()">Click to Start<i class="fas fa-arrow-right"></i></a>
      </p>
    </div>

    <div class="card card-color">
      <p class="card-title">PERFORMANCE IMPROVEMENT PLAN </p>
         
          <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p class="card__apply">
            <a class="card__link" onclick="PIP()">Click to Start<i class="fas fa-arrow-right"></i></a>
          </p>
        </div>

        <div class="card card-color">
          <p class="card-title">UPWARD EVALUATION</p>
             
              <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p class="card__apply">
                <a class="card__link" onclick="UE()">Click to Start<i class="fas fa-arrow-right"></i></a>
              </p>
            </div>

            



</div>
</div>

 <div class="footer">

         
  <p class="company-name">
      Andere Corporation &copy; 2021, ALL Rights Reserved
  </p>

</div>
</div>`;


const LoadPage = ()=>{
    document.getElementById('render').innerHTML = pageRenderOne;

    document.getElementById('employeeUploadSection').style.display = 'none';
 
}


const EPE = ()=>{
  console.log('EPE')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>EPE</p>`

}


const PE360 = ()=>{
  console.log('PE360')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>PE360</p>`

}

const PIP = ()=>{
  console.log('PIP')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>PIP</p>`

}
  

const UE = ()=>{
  console.log('UE')
  document.getElementById('employeeUploadSection').style.display = 'none';
  document.getElementById('render').innerHTML = `<button onclick="LoadPage()">BACK</button><p>PIP</p>`

}
  