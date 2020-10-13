function verificarRespuestas() {

  var total = 6;
  var puntos = 0;
  var myForm = document.forms["quizForm"];
  // cambiar la tala dependiendo de las respuestas necesarias y cantidad de estas//
  var respuestas = ["c", "a", "d", "d", "b", "d"];
 for (var i = 1; i <= total; i++) {
   if(myForm["p" + i].value === null || myForm["p"+ i].value === ""){
   alert("Por favor responde las preguntas " + i);
       return false;
   }else{
     if(myForm["p" + i].value === respuestas[i - 1]){
       puntos++;
     }
   }
 }
 var resultado = document.getElementById("resultado");
 resultado.innerHTML = '<h3> Obtuviste <span>' + puntos + '</span> de <span> ' + total + ' puntos </span> </h3>'
 return false;
}
