


function captura(){
    let menu = document.getElementById("nomest").value;

    switch (menu) {
        case '1' : 
            n_1 = parseInt(prompt("INGRESA UN NUMERO"))
                
                if(n_1 > 99 & n_1 < 1000){
                    a_1 = Math.trunc (n_1/100)
                    b_1 = n_1 % 10

                    if (a_1 == b_1){
                        alert("EL DIGITO "+ a_1 + " ES IGUAL AL DIGITO " + b_1)
                    }
                    else{
                        alert("EL DIGITO "+ a_1 + " ES DIFERENTE AL DIGITO " + b_1)

                    }
                }
                else{
                    alert("EL NUMERO " + n_1 + " NO ES DE TRES DIGITOS ")
                }
            break;

        case '2':

            lista_2 = [2,3,5,7]
            i_2 = 0
            n_2 = parseInt(prompt("INGRESE UN NUMERO"))
            if(n_2 > 99 & n_2 < 1000){
                c_2 = n_2 % 10
                n_2 = Math.trunc(n_2/10)
                b_2 = n_2 % 10
                a_2 = Math.trunc(n_2/10) 
            
                if (a_2 in lista_2){
                    i_2= i_2+1
                }

                
                if (b_2 in lista_2){
                    i_2= i+1
                }

                if (c_2 in lista_2){
                    i_2= i_2+1
                }
            

                alert("Digitos primos: "+ i_2)
            }
            else{
                alert("NO SON IGUALE")
            }
            break;


        case '3':
            n_3 = parseInt(prompt("INGRESE UN NUMERO"))
            i_3 = 0

            if (n_3 > 99 & n_3 < 1000){
                c_3 = n_3 % 10
                n_3 = Math.trunc (n_3 / 10)
                b_3 = n_3 % 10
                a_3 = Math.trunc (n_3 / 10)

                if(a_3 % 2 == 0){
                    i_3 = i_3 + 1
                }
                if(b_3 % 2 == 0){
                    i_3 = i_3 + 1
                }
                if(c_3 % 2 == 0){
                    i_3 = i_3 + 1
                }

                alert("DIGITOS PARES :" + i_3)

            }
            else{
                alert("EL NUMERO " + n_3 + "NO ES DE 3 DIGITOS")
            }

        break;
    
    

        case '4':
            num_4 =(prompt("ESCRIBA UN NUMERO"))
            let dig1_4 = parseInt(num_4.charAt(0))
            let dig2_4 = parseInt(num_4.charAt(1))
            let dig3_4 = parseInt(num_4.charAt(2))

            if(dig1_4===dig2_4+dig3_4){
                alert("EL PRIMER NUMERO ES IGUAL A LA SUMA DEL SEGUNDO Y EL TERCERO")
            }
                else if (dig2_4===dig1_4+dig3_4){
                    alert("EL SEGUNDO NUMERO ES IGUAL A LA SUMA DEL PRIMER Y EL TERCER NUMERO")
                }
                else if (dig3_4===dig1_4+dig2_4){
                    alert("EL TERCER NUMERO ES IGUAL A LA SUMA DEL PRIMER NUMERO Y EL SEGUNDO")
                }
                else{
                    alert("NINGUNO ES IGUAL A LA SUMA DEL OTRO")
                }
        
            break;
    
        
        case '5' :
            let numej5 = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (numej5>=1000 & numej5<=9999){
                d1_5 = Math.trunc (numej5/1000)%10
                d2_5 = Math.trunc (numej5/100)%10
                d3_5 = Math.trunc (numej5/10)%10
                d4_5 = Math.trunc (numej5%10)%10

                sum_5 = d1_5 + d2_5 + d3_5+ d4_5
                alert("LAS SUMA DE LOS 4 DIGITOS ES: " + sum_5)
            }
            else{
                alert("EL NUMERO DEBE SER DE 4 DIGITOS")
            }
        break;

        case '6':
            let n6 = prompt("INGRESE EL NUMERO")
            let contador = 0;

            for (x = 0; x < 4; x++) {
                let pares = parseInt(n6.charAt(x));
                if (pares % 2 == 0) {
                contador++;
                }
            }
                document.write (`La cantidad de digitos para que tiene el numeros es: ${contador}`)
        break;
        
        case '7' :
            let numej7 = parseInt(prompt("INGRESA UN NUMERO: "));
            let numpr_7 = true;
            if(numej7 >1 & numej7 <50){
                for (let i_7 = 2; i_7 < numej7 / 2; i_7++){
                    if(numej7 % i_7 === 0){
                        numpr_7 = false;
                    }
                }
            }
            else{
                alert("EL NUMERO ES MAYOR A 50 O MENOR A 1")
            }
                if(numpr_7){
                    alert(numej7 + " SI ES UN NUMERO PRIMO");
                } else{
                    alert(numej7 + " NO ES UN NUMERO PRIMO")
                }
            
            
            
            break;

        case '8' :
                numej8 = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (numej8>=10000 & numej8<=99999){
                d1_8 = Math.trunc (numej8/10000)%10
                d2_8 = Math.trunc (numej8/1000)%10
                d3_8 = Math.trunc (numej8/100)%10
                d4_8 = Math.trunc (numej8/10)%10
                d5_8 = Math.trunc (numej8%10)%10
            }
                if(d1_8==d5_8 & d2_8==d4_8){
                    alert("EL NUMERO " + numej8 +  " ES CAPICUA")
                }
                else{
                    alert(numej8 + " NO ES CAPICUA")
                }
            break;

        
        case '9' :
                num_9 = parseInt(prompt("INGRESE UN NUMERO DE CUATRO DIGITOS: "))
            if (num_9>=1000 & num_9<=9999){
                d1_9 = Math.trunc (num_9/1000)%10
                d2_9 = Math.trunc (num_9/100)%10
                d3_9 = Math.trunc (num_9/10)%10
                d4_9 = Math.trunc (num_9%10)%10
            }
                if(d2_9==d3_9){
                    alert("EL SEGUNDO Y EL PENULTIMO NUMERO SON IGUALES")
                }
                else{
                    alert("NO SON IGUALES")
                }
        break;

        case '10' :
            num_10 = parseInt(prompt("INTRODUZCA EL NUMERO 10"))
        if (num_10 == 10){
            alert("HAZ INTRODUCIDO EL NUMERO 10")
        }
        else{
            alert("ESTE NO ES EL NUMERO 10")
        }
        break;

        case '11' :
                n_11 = parseInt(prompt("INGRESE UN NUMERO"))

            if(n_11 % 7 == 0){
                alert("EL NUMERO " + n_11 + " ES MULTIPLO DE 7 ")
            }
            else{
                alert("EL NUMERO  " + n_11 + " NO ES MULTIPLO DE 7 ")

            }
            break;

        case '12' :
            a_12 = parseInt(prompt("INGRESA UN NUMERO: "))
            b_12 = parseInt(prompt("INGRESA OTRO NUMERO: "))

            if (a_12 >= b_12){
                document.write("NO SE PUEDE IMPRIMIR LA SERIE")
            }
                while (a_12 <= b_12){
                    document.write("<br>" + a_12)
                    a_12 += 1
                }
        
            break;

        case'13':
            let Numeros13 = prompt("INGRESE EL NUMERO")

            let Numeros2 = prompt("INGRESE EL OTRO NUMERO")
            
        
            let numeroEntero4 = parseInt(Numeros13);
            let numeroEntero5 = parseInt(Numeros2);
        
            let comienzo2, final2;
        
            if (numeroEntero4 < numeroEntero5) {
                comienzo2 = numeroEntero4;
                final2 = numeroEntero5;
            } else {
                comienzo2 = numeroEntero5;
                final2 = numeroEntero4;
            }
            let info14 = []
        
            for (let i = comienzo2 + 1; i < final2; i++) {
                if (i % 10 === 4) {
                document.write(i + "<br>")
                }
            }
            break;

        case '14':
            let Numeros = prompt("INGRESE EL NUMERO")

            e6 = parseInt(Numeros.charAt(0));
            e7 = parseInt(Numeros.charAt(1));
            e8 = parseInt(Numeros.charAt(2));

            if (e6 < e7 < e8) {
                start = e6;
                intermedio = e7;
                final3 = e8;
            } else if (e7 < e6 < e8) {
                start = e7;
                intermedio = e6;
                final3 = e8;
            } else {
                start = e8;
                intermedio = e7;
                final3 = e6;
            }
            let info15 = []
            let info16 = []
            let info17 = []
            for (i = 0 + 1; i < start + 1; i++) {
                document.write(i + "<br>")
            }
            document.write("<br>")
            for (x = 0 + 1; x < intermedio + 1; x++) {
                document.write(x + "<br>")
            }
            document.write("<br>")

            for (e = 0 + 1; e < final3 + 1; e++) {
                document.write(e + "<br>")
            }
   

        break;

        case '15':
            for (let f = 1; f <= 100; f++){
                document.write("<br>" + f)
            }
            break;

        case '16':
            for (let d = 20; d <= 200; d+=2){
                document.write("<br>" + d)
            }
            break;

        case '17':
            for (let i = 25; i <= 205; i += 1) {
                if (i % 10 == 6) {
                  document.write("<br>" + i);
                }
              }
            break;

        case '18':
            let Num18 = prompt("INGRESE EL NUMERO")
            let ejer18 = parseInt(Num18)
            let acumulador = 0
            for (i = 1; i < ejer18; i++) {
            acumulador = acumulador + i
            document.write(i +",")
            }
            document.write( "El total es: " + acumulador)
        break;

        case '19':
            num1_19 = parseInt(prompt("INGRESA UN NUMERO: "))
            num2_19 = parseInt(prompt("INGRESA OTRO NUMERO: "))

            if (num1_19 >= num2_19){
                document.write("NO SE PUEDE IMPRIMIR LA SERIE")
            }
            else{
            }
            while (num1_19 <= num2_19){
                document.write("<br>" + num1_19)
                num1_19 += 1
            }

            break;

        case '20' :

            let Nm = prompt("INGRESE EL NUMERO")

            let digitoOne = parseInt(Nm.charAt(0))
            let digitoOne2 = parseInt(Nm.charAt(1))
            let digitoOne3 = parseInt(Nm.charAt(2))

            if(digitoOne === 1){
                alert("EL PRIMER DIGITO CONTIENE EL 1")
            }
            else if(digitoOne2 === 1){
                alert("EL SEGUNDO DIGITO CONTIENE EL 1")
            }
            else if(digitoOne3 === 1){
                alert("EL TERCER DIGITO CONTIENE EL 1")
            }
            else{
                alert("NINGUNO CONTIENE EL 1")
                
            }

        break;

        case '21':
            let j = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))

            for (y = 1 ; y<=j; y++){
                if(y%5==0){
                    document.write("<br>"+i)
                }
            }
            break;

        case '22':
            for (o = 1; o<=90 ; o++)
            {
                if(o % 3==0){
                    document.write("<br>" + o)
                }
            }
            break;

    }
}
    
