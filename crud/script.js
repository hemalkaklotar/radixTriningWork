var selectedRow = null;
function onformSubmit(e) {
  event.preventDefault();
  var formData = readFormdata();
  console.log(formData);
  if (selectedRow === null){
    insertrow(formData);
  }
  else{
    updateRecord(formData);
  }
}
function readFormdata() {
   var employeId = document.getElementById("employeId").value;
   var employeName = document.getElementById("employeName").value;
   var employeAge = document.getElementById("employeAge").value;
   var employeDesignation = document.getElementById("employeDesignation").value;
   var employeSalary = document.getElementById("employeSalary").value;
   var gender = document.querySelector("input[name='gender']:checked").value;
   var employeLocation = document.getElementById("employeLocation").value;
   var employeEmail = document.getElementById("employeEmail").value;
  var list =[employeId,employeName,employeAge,gender,employeDesignation,employeSalary,employeLocation,employeEmail]
return list;
}
function insertrow(data) {
  var table = document.getElementById("tablelist").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var td1 = newRow.insertCell(0);
  td1.innerHTML = data[0];
  var td2 = newRow.insertCell(1);
  td2.innerHTML = data[1];
  var td3 = newRow.insertCell(2);
  td3.innerHTML = data[2];
  var td4 = newRow.insertCell(3);
  td4.innerHTML = data[3];
  var td5 = newRow.insertCell(4);
  td5.innerHTML = data[4];
  var td6 = newRow.insertCell(5);
  td6.innerHTML = data[5];
  var td7 = newRow.insertCell(6);
  td7.innerHTML = data[6];
  var td8 = newRow.insertCell(7);
  td8.innerHTML = data[7];
  var td9 = newRow.insertCell(8);
  td9.innerHTML = `<button class="btn" onclick="onEdit(this)"> <i class="fs-4 text-success fa fa-pencil" aria-hidden="true"></i></button>`
  var td10 = newRow.insertCell(9);
  td10.innerHTML = `<button class="btn" onclick="onDelete(this)"> <i class="fs-4 text-danger fa fa-trash" aria-hidden="true"></i> </button> `;
  resetForm();
}
function onDelete(td){
  if(confirm("Do you really want to Delete this Record ?")){
    row = td.parentElement.parentElement;
    document.getElementById('tablelist').deleteRow(row.rowIndex);
  }
}
function updateRecord(data) {
  selectedRow.cells[0].innerHTML = data[0];
  selectedRow.cells[1].innerHTML = data[1];
  selectedRow.cells[2].innerHTML = data[2];
  selectedRow.cells[3].innerHTML = data[3];
  selectedRow.cells[4].innerHTML = data[4];
  selectedRow.cells[5].innerHTML = data[5];
  selectedRow.cells[6].innerHTML = data[6];
  selectedRow.cells[7].innerHTML = data[7];

}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  // document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  // document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  // document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  // document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;

  document.getElementById("employeId").value = selectedRow.cells[0].innerHTML;
  document.getElementById("employeName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("employeAge").value = selectedRow.cells[2].innerHTML;
  document.querySelector("input[name='gender']:checked").value = selectedRow.cells[3].innerHTML;
  document.getElementById("employeDesignation").value = selectedRow.cells[4].innerHTML;
  document.getElementById("employeSalary").value = selectedRow.cells[5].innerHTML;
  document.getElementById("employeLocation").value = selectedRow.cells[6].innerHTML;
  document.getElementById("employeEmail").value = selectedRow.cells[7].innerHTML;
}
function resetForm() {
   document.getElementById("employeId").value = '';
   document.getElementById("employeName").value = '';
   document.getElementById("employeAge").value = '';
   document.getElementById("employeDesignation").value = '';
   document.getElementById("employeSalary").value = '';
   document.querySelector("input[name='gender']:checked").value = '';
   document.getElementById("employeLocation").value = '';
   document.getElementById("employeEmail").value = '';
  selectedRow = null;
}

function checkvalidation(data){
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var emailHelp =document.getElementById("emailHelp");
  var employeIdHelp =document.getElementById("employeIdHelp");
  var employeNameHelp =document.getElementById("employeNameHelp");
  var employeAgeHelp =document.getElementById("employeAgeHelp");
  var employeDesignationHelp =document.getElementById("employeDesignationHelp");
  var employeSalaryHelp =document.getElementById("employeSalaryHelp");
  var employeLocationHelp =document.getElementById("employeLocationHelp");
 


  var employeId = document.getElementById("employeId").value;
  var employeName = document.getElementById("employeName").value;
  var employeAge = document.getElementById("employeAge").value;
  var employeDesignation = document.getElementById("employeDesignation").value;
  var employeSalary = document.getElementById("employeSalary").value;
  var gender = document.querySelector("input[name='gender']:checked").value;
  var employeLocation = document.getElementById("employeLocation").value;
  var employeEmail = document.getElementById("employeEmail").value;

  if(employeId.length == 0){
    employeIdHelp.classList.add('dis_block');
    employeIdHelp.classList.remove('d-none');
    employeIdHelp.innerHTML= `Employee Id cant be blank`
    return false;
  }
  if(employeName.length == ''){
    employeNameHelp.classList.add('dis_block');
    employeNameHelp.classList.remove('d-none');
    employeNameHelp.innerHTML= `Employee Name cant be blank`
  }
  if(employeAge.length <= 18){
    employeAgeHelp.classList.add('dis_block');
    employeAgeHelp.classList.remove('d-none');
    employeAgeHelp.innerHTML= `Employee Age cant be lesse than 18`
  }
  if(employeDesignation.length == ''){
    employeDesignationHelp.classList.add('dis_block');
    employeDesignationHelp.classList.remove('d-none');
    employeDesignationHelp.innerHTML= `Employee Designation cant be blank`
  }
  if(employeSalary.length == 0){
    employeSalaryHelp.classList.add('dis_block');
    employeSalaryHelp.classList.remove('d-none');
    employeSalaryHelp.innerHTML= `Employee Salary cant be 0`
  }
  if(employeLocation.length == ''){
    employeLocationHelp.classList.add('dis_block');
    employeLocationHelp.classList.remove('d-none');
    employeLocationHelp.innerHTML= `Employee location cant be blank`
  }
  if(!filter.test(data[7])){
  console.log(emailHelp)
  emailHelp.classList.add('dis_block');
  emailHelp.classList.remove('d-none');
  }
}