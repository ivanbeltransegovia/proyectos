function datos() {
    let datosentrada = [];
    let datocantidad = prompt("Cuantos números quieres ingresar").trim();
    while (datocantidad === "" || isNaN(Number(datocantidad))) {
      datocantidad = prompt("Por favor, ingrese solo números").trim();
    }
    for (let i = 1; i <= Number(datocantidad); i++) { // Convertir datocantidad a número
      let datoentrada = prompt("Ingresa número").trim();
      datosentrada.push(datoentrada); // Convertir datoentrada a número y agregarlo al array
    }
    return datosentrada;
  }
  
  let array = datos(); // Llamar a la función datos para obtener el array de números
  console.log(array)

  function sumanumero(array) {

    let nuevoarray=array.filter(elemento=>{
        const numero=parseFloat(elemento)
        return !isNaN(elemento)
    })
    return nuevoarray
  }
  let almacen=sumanumero(array)
  let almacena=almacen.map(numero=>parseFloat(numero))

  let suma=0
  almacena.forEach(element => {
    suma=suma+element
  });

  console.log(almacena)
  console.log(suma)
  











