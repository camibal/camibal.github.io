function validacion() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  if (name == null || name == 0 || name == /^\s+$/.test(name)) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo nombre debe tener algun valor');
    return false;
  }
  else if (message == null || message == 0 || /^\s+$/.test(message)) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo mensaje debe tener algun valor');
    return false;
  }
  let data = 'Nombre: ' + name + ' Mensaje: ' + message;
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  window.open(`https://wa.me/+573202075715?text=` + data);
  // location.reload();
  return true;
}