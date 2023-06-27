var arregloPalabras= ["pangolindo","coche","alicia","mouse","vaso","queso","pluma","dorito","pañuelo","orbitario",];

const uno = document.querySelector('.primero');
const dos = document.querySelector('.segundo');
const tres = document.querySelector('.tercero');


    let palabra1 = arregloPalabras[0];
    var palabras1 = palabra1.length;
    
    let palabra2 = arregloPalabras[1];
    var palabras2 = palabra2.length;
    
    let palabra3 = arregloPalabras[2];
    let palabras3 = palabra3.length;
    
    let palabra4 = arregloPalabras[3];
    let palabras4 = palabra4.length;
    
    let palabra5 = arregloPalabras[4];
    let palabras5 = palabra5.length;
    
    let palabra6 = arregloPalabras[5];
    let palabras6 = palabra6.length;
    
    let palabra7 = arregloPalabras[6];
    let palabras7 = palabra7.length;
    
    let palabra8 = arregloPalabras[7];
    let palabras8 = palabra8.length;
    
    let palabra9 = arregloPalabras[8];
    let palabras9 = palabra9.length;

    let palabra10 = arregloPalabras[9];
    let palabras10 = palabra10.length;


 /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga de todas */
    if (palabras1 > palabras2 &&
         palabras1 > palabras3 && 
         palabras1 > palabras4&& 
         palabras1 > palabras5&& 
         palabras1 > palabras6&& 
         palabras1 > palabras7&& 
         palabras1 > palabras8&& 
         palabras1 > palabras9&& 
         palabras1 > palabras10) {
        uno.textContent = ("Esta es la palabra mas larga: "+ palabra1);
    }
     /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */
    else if (palabras2 > palabras1 &&
        palabras2 > palabras3 && 
        palabras2 > palabras4&& 
        palabras2 > palabras5&& 
        palabras2 > palabras6&& 
        palabras2 > palabras7&& 
        palabras2 > palabras8&& 
        palabras2 > palabras9&& 
        palabras2 > palabras10) {
       uno.textContent = ("Esta es la palabra mas larga: "+ palabra2);
     /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

   } else if (palabras3 > palabras1 &&
    palabras3 > palabras3 && 
    palabras3 > palabras4&& 
    palabras3 > palabras5&& 
    palabras3 > palabras6&& 
    palabras3 > palabras7&& 
    palabras3 > palabras8&& 
    palabras3 > palabras9&& 
    palabras3 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra3);

        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras4 > palabras1 &&
    palabras4 > palabras3 && 
    palabras4 > palabras5&& 
    palabras4 > palabras6&& 
    palabras4 > palabras7&& 
    palabras4 > palabras8&& 
    palabras4 > palabras9&& 
    palabras4 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra4);

        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras5 > palabras1 &&
    palabras5 > palabras3 && 
    palabras5 > palabras4&& 
    palabras5 > palabras6&& 
    palabras5 > palabras7&& 
    palabras5 > palabras8&& 
    palabras5 > palabras9&& 
    palabras5 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra5);

        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras6 > palabras1 &&
    palabras6 > palabras3 && 
    palabras6 > palabras4&& 
    palabras6 > palabras5&& 
    palabras6 > palabras7&& 
    palabras6 > palabras8&& 
    palabras6 > palabras9&& 
    palabras6 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra6);

        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras7 > palabras1 &&
    palabras7 > palabras3 && 
    palabras7 > palabras4&& 
    palabras7 > palabras5&& 
    palabras7 > palabras6&& 
    palabras7 > palabras8&& 
    palabras7 > palabras9&& 
    palabras7 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra7);

        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras8 > palabras1 &&
    palabras8 > palabras3 && 
    palabras8 > palabras4&& 
    palabras8 > palabras5&& 
    palabras8 > palabras6&& 
    palabras8 > palabras7&& 
    palabras8 > palabras9&& 
    palabras8 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra8);
        /*Aqui tenemos nuestro primer caso para comparar la palabra mas larga del segundo caso */

} else if (palabras9 > palabras1 &&
    palabras9 > palabras3 && 
    palabras9 > palabras4&& 
    palabras9 > palabras5&& 
    palabras9 > palabras6&& 
    palabras9 > palabras7&& 
    palabras9 > palabras8&& 
    palabras9 > palabras10) {
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra9);


   /*Se concluye que ninguna de las letras es mas grande entonces automaticamnte nos da un false */
} else 
   uno.textContent = ("Esta es la palabra mas larga: "+ palabra10);
