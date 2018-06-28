document.getElementById('resultado','peso', 'planeta', 'respuesta');

//let pesou =document.getElementById('peso');
  //alert("tu peso es "+ pesou.value);

function contar ()
{
let respuesta = document.getElementById('respuesta');
let peso = document.getElementById('peso');
let planeta = document.getElementById('planeta');
var g_tierra= 9.8;
var g_marte= 3.7;
var g_jupiter= 24.8;
var g_mercurio= 3.7;
var g_venus= 8.9;
var g_luna= 1.6;
var g_saturno= 10.4;
var g_urano= 8.7;
var g_neptuno= 11.5;
let peso_final;

if (planeta.value == 1)
{
peso_final= Math.floor(peso.value* g_marte / g_tierra);
respuesta.innerHTML = "tu peso en Marte es " + peso_final + " kilos " + "Marte es mas conocido como el planeta rojo";
}
else if (planeta.value ==2)
 {
   peso_final = Math.floor(peso.value* g_jupiter / g_tierra);
respuesta.innerHTML = "tu peso en Jupiter es " + peso_final +" kilos ";
}
   else if (planeta.value ==3)
   {
     peso_final = Math.floor(peso.value* g_mercurio / g_tierra);
     respuesta.innerHTML = "tu peso en Mercurio es " + peso_final + " kilos " +" sabias que mercurio debe su nombre al mensaje de los dioses";
   }
     else if (planeta.value ==4)
     {
       peso_final = Math.floor(peso.value* g_venus / g_tierra);
      respuesta.innerHTML = "tu peso en Venus es " + peso_final+ " kilos " + "sabias venus tiene su nombre debido a la diosa del amor";
     }
       else if (planeta.value ==5)
       {
         peso_final = Math.floor(peso.value* g_luna / g_tierra);
         respuesta.innerHTML = "tu peso en Luna es " + peso_final + " kilos " +" sabias que la luna influye en las mareas creando las olas del mar";
       }
         else if (planeta.value ==6)
         {
           peso_final = Math.floor(peso.value* g_saturno / g_tierra);
           respuesta.innerHTML = "tu peso en Saturno es " + peso_final+ " kilos ";
         }
           else if (planeta.value ==7)
           {
             peso_final = Math.floor(peso.value* g_urano / g_tierra);
             respuesta.innerHTML = "tu peso en Urano es " + peso_final+ " kilos ";
             }
             else if (planeta.value ==8)
             {
               peso_final = Math.floor(peso.value* g_neptuno / g_tierra);
               respuesta.innerHTML = "tu peso en Marte es " + peso_final + " kilos " + "sabias que neptuno se le nombra así por el dios de los mares en la antigua Roma";
             }
               else
               {
                 peso_final = 1000000;
                 respuesta.innerHTML = " Inserta un dato válido o pesas " + peso_final + " kilos " + "en Kripton";
               }
              }
