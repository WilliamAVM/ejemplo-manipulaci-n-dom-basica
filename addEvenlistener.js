const h1 = document.querySelector("h1");
const form = document.querySelector("#form");

const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//btn.addEventListener('evento', btnOnClick);//este metodo necesita dos argumentos el primero seria el tipo de evento al que estara atento, el segundo es la funcion que se realizara cuando se cumpla el evento, ojo que no se debe de poner los parentesis de la funcion ya que este metodo los agraga por debajo automaticamente

//la funcion deabajo seria para cuando no tenemos el formulario ya que dentro de un formulario este lo interpreta como queel ultimo boton dentro del formulario es un submit, esto hara que envie la inforamcion a algun punto nuevo, lo que para este caso no lo queremos

// btn.addEventListener('click', btnOnClick);
// function btnOnClick() {
//   let resultado = input1.value + input2.value;
//   pResult.innerText="Resultado:" +resultado;
// }

//la funcion de abajo es para cuando tengamos un formulario y queremos realizar o mostrar alguna informacion dentro del html
//esta es la manera 1 de utilizar formulario 
// form.addEventListener("submit", summarInputValues);
// function summarInputValues(evt) {
//     //este metodo al parecer es el encargado de actualizar la pagina por defecto y nosotros al invocarlo le estamos diciendo que deje de hacerlo
//     console.log(evt.preventDefault());
//     evt.preventDefault();
//   let resultado = input1.value + input2.value;
//   pResult.innerText = "Resultado:" + resultado;
// }


//esta es la segunda forma de solucionar el problema, la manera para solucionar este problema es que cuando usamos un form lo que hace es decirle al ultimo boton dentro del form que sera de tipo submit y esto es lo que hace que se actualice, pero si lo que hacemos al ultimo boton es cambiar el elemento de tipo por button ya no se actualizaria 

 btn.addEventListener("click", summarInputValues);
 function summarInputValues() {
     //este metodo al parecer es el encargado de actualizar la pagina por defecto y nosotros al invocarlo le estamos diciendo que deje de hacerlo
    //  console.log(evt.preventDefault());
    //  evt.preventDefault();
   let resultado = input1.value + input2.value;
   pResult.innerText = "Resultado:" + resultado;
 }