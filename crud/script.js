function myfunction() {
       var employeId = parseInt(document.getElementById("employeId").value);
       var employeName = document.getElementById("employeName").value;
       var employeAge = parseInt(document.getElementById("employeAge").value);
       var employeDesignation = document.getElementById("employeDesignation").value;
       var gender = document.querySelector("input[name='gender']:checked").value;
       var employeLocation = document.getElementById("employeLocation").value;
       var employeloEmail1 = document.getElementById("employeloEmail1").value;
       // var tablebody = document.getElementById("tablebody");
       console.log(tablebody);

       const node = document.createElement("tr");
     document.write(node);
       
       node.innerHTML=`
       <td> ${employeId} </td>
     `
       document.getElementById("tablebody").appendChild(node);

}