var teclas = {
  UP:38, //aqui solo hay una linea de codigo por ello separamos solo con ,
  DOWN:40, //Ojoo las variables se declaran aca con : !!!!
  LEFT:37,
  RIGHT:39,
}; //este si lleva punto y coma!!!! pues es una sola linea de codigo
//cuadr+.addEventListener("mouseup",dibujarTeclado); //no importa que tecla use

var cuadrito = document.getElementById("area_de_dibujo"); //trajimos el canvas de html
var papel = cuadrito.getContext("2d");

var x; //Variables para recordar donde iniciar (Para el primer movimiento lo hacemos en el centro;
var y;

var movimiento = 1;
var pintar;
var i; //contador
var desfase = 30;

dibujarLinea(0,0,600,0,papel,2);
dibujarLinea(600,0,600,600,papel,2);
dibujarLinea(600,600,0,600,papel,2);
dibujarLinea(0,600,0,0,papel,2);

cuadrito.addEventListener("mousedown",inicioMouse);
cuadrito.addEventListener("mousemove",dibujarMouse);
cuadrito.addEventListener("mouseup",finMouse);

function inicioMouse(eventoinicio)
{
  pintar=true;
}

function finMouse(eventofin)
{
  pintar=false;
}

function dibujarMouse(eventodibujar)
{
console.log(eventodibujar);
  if(pintar)
  {
    x=eventodibujar.layerX;
    y=eventodibujar.layerY;
    dibujarLinea(x-1, y-1, x+1, y+1, papel,1);
  }
}
//dibujarLinea("red", 149, 149, 151, 151, papel); //papel entra como variable para el parametro contexto (LIENZO)

function dibujarLinea (x0, y0, xf, yf, lienzo, grosor)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "red";
  lienzo.lineWidth=grosor;
 //atributo grosor de linea
  lienzo.moveTo(x0,y0);
  lienzo.lineTo(xf,yf);
  lienzo.stroke(); //Ejecutamos el DIBUJO
  lienzo.closePath(); //finalizamos dibujo
}

function dibujarTeclado (evento)
{
 console.log(evento);
  var colorcito = "blue";
  y0=y0+desfase;
  switch (evento.keyCode) //vamos a ejecutar teclas dependiendo de cual se teclee
  {
    case teclas.DOWN: //Bajamos  -> sumamos a (Y) ¿Por Qué?
    dibujarLinea(colorcito,x0,y0,x0,y0+movimiento, papel);
    y0=y0+movimiento;
    break;
    case teclas.UP:
    dibujarLinea(colorcito,x0,y0,x0,y0-movimiento, papel);
    y0=y0-movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito,x0,y0,x0-movimiento,y0, papel);
    x0=x0-movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito,x0,y0,x0+movimiento,y0, papel);
    x0=x0+movimiento;
    break;
    default:
  }

}
