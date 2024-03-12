/*login*/
$("#formulario-ingreso").submit((event)=>{
    event.preventDefault();
    validarUsuario();
}) 


function validarUsuario(){
    const usuarioIngresado= $("#inputUser").val();
    const claveIngresado= $("#inputPassUser").val();

    if(funcionvalidadoDatos(usuarioIngresado,claveIngresado)){
        console.log("ingreso correcto");
        $("#msj-correcto").show();
        location.href="menu.html"
       
    
    }else{
        console.log("ingreso fallido");
        $("#msj-incorrecto").show();
    }
    
}

const funcionvalidadoDatos=(user,pass)=>{

    const usuarioValido="thomas";
    const claveValida="password"

    if(user===usuarioValido && pass===claveValida){
        return true;
    }else{
        return false;
    }
}

/*deposit*/
$(document).ready(function() {
  var balance = 0;

  function updateBalance() {
    $('#balance').text(balance);
  }

  $('#depositBtn').click(function() {
    var ingreso = parseFloat($('#ingreso').val());
    if (!isNaN(ingreso) && ingreso > 0) {
      balance += ingreso;
      updateBalance();
      $('#ingreso').val('');
      $("#dep_correcto").show();
    } else {
      $("#dep_incorrecto").show();    }   
  });

  $('#withdrawBtn').click(function() {
    var ingreso = parseFloat($('#ingreso').val());
    if (!isNaN(ingreso) && ingreso > 0 && ingreso <= balance) {
      balance -= ingreso;
      updateBalance();
      $('#ingreso').val('');
      $("#ret_correcto").show();
    } else {
      $("#ret_incorrecto").show();
    }
  });
});

/*sendmoney*/

function guardar(){
  var nombreNvo = document.getElementById("name").value;
  var numCuenta = document.getElementById("numCuenta").value;
  var banco = document.getElementById("banco").value;{
      switch(banco){
  case "1":
      console.log("Bancoestado")
      var banco= "Bancoestado"
   break;
  case "2":
      console.log("Banco de Chile")
      var banco= "Banco de Chile"
   break;
  case "3":
      console.log("Santander")
      var banco= "Santander"
   break;
  default:
      console.log("seleccionar banco");
}}

  var fila="<tr><td>"+nombreNvo+"</td><td>"+banco+"</td><td>"+numCuenta+"</td></tr>";

  var btn = document.createElement("TR");
     btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}

/**index**/
document.getElementById("btn_green").onclick = function () {
  location.href = "#";}

document.getElementById("btn_cred").onclick = function () {
    location.href = "#";}




  
    