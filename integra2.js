var nom=prompt("Ingrese su nombre");

var preg1=prompt("¿Como se llama el 1er día de primavera?\nA:Primer día de primvaera\nB:Equinoccio de primavera\nC:Equinoccio de invierno")
if (preg1=="B"){
    preg1=25
}
else{
Preg1=0
}
document.write("Tienes",preg1)

var preg2=prompt("¿Qué sucede en el Polo Norte cuando llega la primavera?\nA:6 meses de luz\nB:6 mese de oscuridad\nC:6 meses de alternación")
if (preg2=="A"){
    preg2=25
}
else{
Preg2=0
}
var total=preg1+preg2
if (total>25){
document.write(nom," sabes de la primera :D")
}
else{
document.write(nom," te falta conocimiento sobre la primavera D:")
}