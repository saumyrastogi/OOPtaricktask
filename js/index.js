
function myfunction(){

  var firstnameuser = document.querySelector(".first").value;
  var lastnameuser = document.querySelector(".second").value;
  var emailuser = document.querySelector(".emailc").value;
  var parent = document.querySelector(".sp");
  
  if(document.getElementById("password").value==document.getElementById("confirmpassword").value)
  {
      var newdiv=document.createElement("div");
      var para1=document.createElement("p");
      var para2=document.createElement("p");
      var para3=document.createElement("p");
      para1.innerText= firstnameuser;
      para2.innerText=lastnameuser;
      para3.innerText=emailuser;
      newdiv.appendChild(para1);
      newdiv.appendChild(para2);
      newdiv.appendChild(para3);
      parent.appendChild(newdiv);
  }
  else {
    {
      alert('Password not matched!');
    }
  }
}
