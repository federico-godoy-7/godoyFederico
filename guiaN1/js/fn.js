function saludo (){ // EJERCICIO 1
    alert('¡Hola, Mundo!')
}

    function saludoPersonalizado (){ // EJERCICIO 2
        let nombre = document.getElementById('name').value
        let resultado = document.getElementById('resultado')

        if (nombre === '') {
            resultado.innerText = "Por favor ingresá tu nombre."
        }
        else {
            alert(`¡Hola, ${nombre}!`) // con los backsticks (``) se pueden mostrar variables
        }
    }

        function analisis () { // EJERCICIO 3
            let valor = document.getElementById('valor').value

            if (valor === '') {
                console.log('El input esta vacío')
                console.log('Ingrese denuevo el input')
                console.log('---------------------')
            }
                else if (isNaN(valor)) { //si isNaN es true, no son numeros. si es false o NaN, son numeros
                console.log('No es un número válido')
                console.log('Tipo: String')
                console.log('---------------------')
                }
                else {
                    console.log('Es un número válido')
                    console.log('---------------------')
                }
        }
            function calcular () { // EJERCICIO 4
                let aux = 25*4; //se resuelve primero la multiplicacion
                let aux2 = 10 //se resta al resultado de la multiplicacion
                let operacion

                let resultado = document.getElementById('resultado')

                operacion = aux - aux2; //se guarda el resultado
                console.log('El resultado es: ' + operacion)
                resultado.innerText = "El resultado es: " + operacion // se muestra en el parrafo
            }

                function sumar () { // EJERCICIO 5
                    
                    let resultado = document.getElementById('resultado')

                    let n1 = document.getElementById('n1').value
                    let n2 = document.getElementById('n2').value
                    let operacion = Number(n1) + Number(n2)

                    if ((n1 === '') || (n2 === '')) { // el "||"" se usa como OR (al menos uno tiene que cumplir con la condicion)
                        resultado.innerText = 'Error, uno de los inputs están vacíos'
                    }
                    else {
                        resultado.innerText = "El resultado es: " + operacion
                    }
                }
                    function restar () { // EJERCICIO 6
    
                        let n1 = document.getElementById('id_num1').value
                        let n2 = document.getElementById('id_num2').value
                        let operacion = Number(n1) - Number(n2)

                        let resultado = document.getElementById('resultado')

                            if (operacion > 0) {
                            resultado.innerText = 'Resultado:' + operacion + ' (Positivo)'
                            }
                            else if (operacion < 0) {
                                resultado.innerText = 'Resultado: ' + operacion + ' (Negativo)'
                            }
                                else {
                                    resultado.innerText = 'Resultado: ' + operacion
                                }
                        }
                            function multiplicar () { // EJERCICIO 7

                                let n1 = document.getElementById('id_num1').value
                                let n2 = document.getElementById('id_num2').value
                                let operacion = Number(n1) * Number (n2)

                                let resultado = document.getElementById('resultado')

                                resultado.innerText = 'El producto es: ' + operacion

                                console.log(n1 + 'x1=' + n1*1)
                                console.log(n1 + 'x2=' + n1*2)
                                console.log(n1 + 'x3=' + n1*3)
                                console.log(n1 + 'x4=' + n1*4)
                                console.log(n1 + 'x5=' + n1*5)
                                console.log('---------------------')
                            }
                                function dividir () { // EJERCICIO 8
                                    
                                    let n1 = document.getElementById('id_num1').value
                                    let n2 = document.getElementById('id_num2').value
                                    let operacion = Number(n1) / Number(n2)

                                    let resultado = document.getElementById('resultado')

                                    if (Number(n2)==0) {
                                        resultado.innerText = "Error: no se puede dividir por cero"
                                    }
                                    else {
                                        resultado.innerText = 'El resultado es: ' + operacion.toFixed(2)
                                    }
                                }
                                    function clasificar () { // EJERCICIO 9
                                        
                                        let n1 = document.getElementById('id_num').value

                                        let resultado = document.getElementById('resultado')

                                        if (n1>0) {
                                            resultado.innerText = "El numero ingresado es positivo."
                                        }
                                            else if (n1==0) {
                                                resultado.innerText = "El numero ingresado es cero (0)."
                                            }
                                                else if (n1<0) {
                                                    resultado.innerText = "El numero ingresado es negativo."
                                                }
                                    }
                                        function parOimpar () { // EJERCICIO 10
                                            let n1 = parseFloat(document.getElementById('id_num').value) // se convierte el input en un número real
                                            
                                            let resultado = document.getElementById('resultado')

                                            if (Math.floor(n1) !== n1) {
                                                resultado.innerText = "Ingrese un numero entero"
                                            }
                                                else if (n1 % 2 === 0) {
                                                    resultado.innerText = "El numero es par"
                                                }
                                                    else {
                                                        resultado.innerText = "El numero es impar"
                                                    }
                                        }
                                            function verificarEdad () { // EJERCICIO 11
                                                let nombre = document.getElementById('id_nombre').value
                                                let edad = Number(document.getElementById('id_edad').value)

                                                let resultado = document.getElementById('resultado')

                                                    if (edad<0 || edad>=120) {
                                                        resultado.innerText = 'Error, la edad es invalida'
                                                    }
                                                        else if (edad>=18) {
                                                            resultado.innerText = nombre + " Es mayor de edad."
                                                        }
                                                            else if (edad<18) {
                                                            resultado.innerText = nombre + " No es mayor de edad."
                                                            }
                                            }
                                                function comparar () { // EJERCICIO 12
                                                    let n1 = Number(document.getElementById('id_num1').value)
                                                    let n2 = Number(document.getElementById('id_num2').value)

                                                    let resultado = document.getElementById('resultado')

                                                    if (n1===n2) { 
                                                        resultado.innerText = 'Los dos numeros son iguales'
                                                    }
                                                        else if (n1>n2) {
                                                        resultado.innerText = 'El mayor es: ' + n1
                                                        }
                                                            else if (n1<n2) {
                                                                resultado.innerText = 'El mayor es: ' + n2
                                                            }
                                                }
                                                    function calculo () { // EJERCICIO 13
                                                        let base = Number(document.getElementById('id_base').value) // SIEMPRE QUE SE TRABAJEN CON NUMEROS EN INPUT CONVERTIR CON NUMBER()
                                                        let altura = Number(document.getElementById('id_altura').value) // SIEMPRE QUE SE TRABAJEN CON NUMEROS EN INPUT CONVERTIR CON NUMBER()

                                                        let resultado = document.getElementById('resultado')

                                                        if ((base<=0) || (altura<=0)) {
                                                            resultado.innerText = 'Error, la base o altura debe ser un numero positivo'
                                                        }
                                                            else {
                                                                let area = base * altura
                                                                let perimetro = (2 * (base+altura))

                                                                resultado.innerText = 'El área es : ' + area + ' --- El perímetro es : ' + perimetro
                                                            }
                                                    }
                                                        function conversion () { // EJERCICIO 14
                                                            let grados = Number(document.getElementById('celsius').value)

                                                            let resultado = document.getElementById('resultado')

                                                            let gradosFahrenheit = Number(grados) * 9/5 + 32
                                                            let gradosKelvin = Number(grados) + 273.15

                                                            if (grados<=-273.15) {
                                                                resultado.innerText = 'Error, la temperatura excede el cero absoluto.'
                                                            }
                                                                else {
                                                                    resultado.innerText = 'El equivalente a Fahrenheit es: ' + gradosFahrenheit.toFixed(2) +  ' ---- El equivalente a Kelvin es: ' + gradosKelvin.toFixed(2)
                                                                }
                                                        }
                                                            function propina () { // EJERCICIO 15
                                                                let monto = Number(document.getElementById('monto').value)
                                                                let porcentaje = Number(document.getElementById('porcentaje').value)

                                                                let operacion = ((monto*porcentaje) / 100)

                                                                let resultado = document.getElementById('resultado')

                                                                if (porcentaje>=100) {
                                                                    resultado.innerText = 'Error, el porcentaje de propina no puede ser igual o mayor a 100'
                                                                }
                                                                    else if (porcentaje<0) {
                                                                        resultado.innerText = 'Error, el porcentaje de propina no puede ser negativo'
                                                                    }
                                                                        else if (monto<=0) {
                                                                            resultado.innerText = 'El monto no puede ser menor a 0'
                                                                        }
                                                                            else {
                                                                                resultado.innerText = 'Monto de la propina: ' + operacion.toFixed(2) + ' --- Total a pagar: ' + monto
                                                                            }
                                                            }
                                                                function evaluar () { // EJERCICIO 16
                                                                    let numero = Number(document.getElementById('id_num').value)
                                                                    let minimo = Number(document.getElementById('id_min').value)
                                                                    let maximo = Number(document.getElementById('id_max').value)

                                                                    let resultado = document.getElementById('resultado')

                                                                    if (minimo>maximo) {
                                                                        resultado.innerText = 'Error, el mínimo tiene que ser menor al máximo.'
                                                                    }
                                                                        else if (numero<minimo) { 
                                                                            resultado.innerText = 'El número es menor al mínimo.'
                                                                        }
                                                                            else if (numero>maximo) { 
                                                                                resultado.innerText = 'El número es mayor al máximo.'
                                                                            }
                                                                                else if ((numero>=minimo) && (numero<=maximo)) {
                                                                                    resultado.innerText  = 'El número ingresado está dentro del rango ingresado.'
                                                                                }
                                                                }
                                                                    function calculadora () { // EJERCICIO 17
                                                                        let numero1 = Number(document.getElementById('id_num1').value)
                                                                        let numero2 = Number(document.getElementById('id_num2').value)

                                                                        let resultado = document.getElementById('resultado')

                                                                        let resultadoOperacion

                                                                        let seleccion = document.getElementById('operacion').value

                                                                            if (seleccion === 'suma') {
                                                                                resultadoOperacion = numero1 + numero2
                                                                                resultado.innerText = 'El resultado de la suma es: ' + resultadoOperacion
                                                                            }
                                                                                else if (seleccion === 'resta') {
                                                                                    resultadoOperacion = numero1 - numero2
                                                                                    resultado.innerText = 'El resultado de la resta es: ' + resultadoOperacion
                                                                                }
                                                                                    else if (seleccion === 'multi') {
                                                                                        resultadoOperacion = numero1 * numero2
                                                                                        resultado.innerText = 'El resultado de la multiplicacion es: ' + resultadoOperacion
                                                                                    }
                                                                                        else if (seleccion === 'div') {
                                                                                            if (numero2===0) {
                                                                                                resultado.innerText = 'El divisor no puede ser 0'
                                                                                            } 
                                                                                            else {
                                                                                                resultadoOperacion = numero1 / numero2
                                                                                                resultado.innerText = 'El resultado de la división es: ' + resultadoOperacion
                                                                                            }
                                                                                        }
                                                                    } 
                                                                        function descuento () { // EJERCICIO 18
                                                                            let precio = Number(document.getElementById('id_precio').value)
                                                                            let descuento = Number(document.getElementById('id_descuento').value)

                                                                            let montoAhorrado
                                                                            let precioFinal

                                                                            let resultado = document.getElementById('resultado')

                                                                            if (descuento===0) {
                                                                                resultado.innerText = 'Sin descuento.'
                                                                                resultado.innerText += 'El precio final es: ' + precio
                                                                            }
                                                                                else if ((descuento>=1) && (descuento<=30)) {
                                                                                    montoAhorrado = precio*(descuento/100)
                                                                                    precioFinal = precio - montoAhorrado
                                                                                    resultado.innerText = `Oferta
                                                                                        El monto ahorrado es: ${montoAhorrado}
                                                                                        El precio final es: ${precioFinal}`
                                                                                }
                                                                                    if (descuento>30) {
                                                                                        montoAhorrado = precio*(descuento/100)
                                                                                        precioFinal = precio - montoAhorrado
                                                                                        resultado.innerText = `¡Mega Oferta!
                                                                                            El monto ahorrado es: ${montoAhorrado}
                                                                                            El precio final es: ${precioFinal}`
                                                                                    }
                                                                        }
                                                                            function bisiesto () { // EJERCICIO 19
                                                                                let anio = Number(document.getElementById('anio').value)

                                                                                let resultado = document.getElementById('resultado')

                                                                                if ((anio % 4 === 0) && (anio % 100 !== 0) || (anio % 400 === 0)) {
                                                                                    resultado.innerText = 'El año ingresado es bisiesto'
                                                                                } 
                                                                                else {
                                                                                    resultado.innerText = 'El año ingresado no es bisiesto' 
                                                                                }
                                                                            }
                                                                                function precioMasIva () { // EJERCICIO 20
                                                                                    let precioSinIva = Number(document.getElementById('id_precio').value)
                                                                                    let precioConIva
                                                                                    let check = document.getElementById('id_conIva').checked

                                                                                    let resultado = document.getElementById('resultado')

                                                                                    if (check) {
                                                                                        precioConIva = precioSinIva * 1.21
                                                                                        resultado.innerText = 'Precio con iva: ' + precioConIva
                                                                                    }
                                                                                    else {
                                                                                        resultado.innerText = 'Precio sin iva: ' + precioSinIva
                                                                                    }
                                                                                }
                                                                                    function horario () { // EJERCICIO 21
                                                                                        let segundosInput = Number(document.getElementById('id_segundos').value)
                                                                                        let horas = Math.floor(segundosInput / 3600)
                                                                                        let minutos = (Math.floor((segundosInput % 3600) / 60))
                                                                                        let segundos = (segundosInput % 60)
                                                                                        let resultado = document.getElementById('resultado')

                                                                                            resultado.innerText = `Horas: ${horas}h
                                                                                            Minutos: ${minutos}m
                                                                                            Segundos: ${segundos}s`
                                                                                    }
                                                                                        function password () { // EJERCICIO 22
                                                                                            let password1 = document.getElementById('id_pass1').value
                                                                                            let password2 = document.getElementById('id_pass2').value

                                                                                            let resultado = document.getElementById('resultado')
                                                                                            if ((password1.length>=6) && (password2.length>=6)) {
                                                                                                if (password1 === password2) {
                                                                                                    resultado.innerText = 'La contraseña es válida'
                                                                                                }
                                                                                                else {
                                                                                                    resultado.innerText = 'Error. Las contraseñas no son iguales'
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                resultado.innerText = 'La contraseña es muy corta, Debe tener al menos 6 caracteres'
                                                                                            }
                                                                                        }
                                                                                            function evaluarNota () { // EJERCICIO 23
                                                                                                let nota = parseFloat(document.getElementById('id_nota').value)

                                                                                                let resultado = document.getElementById('resultado')
                                                                                                if ((nota>=0) && (nota<=3)) {
                                                                                                    resultado.innerText = 'Desaprobado'
                                                                                                }
                                                                                                    else if ((nota>=4) && (nota<=5)) {
                                                                                                        resultado.innerText = 'Recuperatorio'
                                                                                                    }
                                                                                                        else if ((nota>=6) && (nota<=7)) {
                                                                                                            resultado.innerText = 'Aprobado'
                                                                                                        }
                                                                                                            else if ((nota>=8) && (nota<=9)) {
                                                                                                                resultado.innerText = 'Muy bueno'
                                                                                                            }
                                                                                                                else if (nota===10) {
                                                                                                                    resultado.innerText = 'Sobresaliente'
                                                                                                                }
                                                                                                            else {
                                                                                                                resultado.innerText = 'La nota debe ser entre 0 y 10'
                                                                                                            }
                                                                                            }
                                                                                                function calcularVuelto () { // EJERCICIO 24
                                                                                                    let precio = parseFloat(document.getElementById('id_precio').value)
                                                                                                    let montoEntregado = parseFloat(document.getElementById('id_entregado').value)

                                                                                                    let resultado = document.getElementById('resultado')
                                                                                                    if (montoEntregado<precio) {
                                                                                                        resultado.innerText = 'Faltan: $' + (precio - montoEntregado).toFixed(2)
                                                                                                    }
                                                                                                        else if (precio===montoEntregado) {
                                                                                                            resultado.innerText = 'Monto exacto, sin vuelto'
                                                                                                        }
                                                                                                            else if (montoEntregado>precio) {
                                                                                                                resultado.innerText = 'Queda $' + (montoEntregado - precio).toFixed(2) + ' De vuelto'
                                                                                                            }
                                                                                                }
                                                                                                    function operacion () { // EJERCICIO 25
                                                                                                        let numero1 = Number(document.getElementById('id_num1').value)
                                                                                                        let numero2 = Number(document.getElementById('id_num2').value)
                                                                                                        let resultado = document.getElementById('resultado')
                                                                                                        let resultadoOperacion
                                                                                                        let seleccion = document.getElementById('op').value

                                                                                                        if (seleccion === 'suma') {
                                                                                                            resultadoOperacion = numero1 + numero2
                                                                                                            resultado.innerText = 'El resultado de la suma es: ' + resultadoOperacion
                                                                                                        }
                                                                                                            else if (seleccion === 'resta') {
                                                                                                                resultadoOperacion = numero1 - numero2
                                                                                                                resultado.innerText = 'El resultado de la resta es: ' + resultadoOperacion
                                                                                                            }
                                                                                                                else if (seleccion === 'multi') {
                                                                                                                    resultadoOperacion = numero1 * numero2
                                                                                                                    resultado.innerText = 'El resultado de la multiplicacion es: ' + resultadoOperacion
                                                                                                                }
                                                                                                                    else if (seleccion === 'div') {
                                                                                                                        if (numero2===0) {
                                                                                                                            resultado.innerText = 'El divisor no puede ser 0'
                                                                                                                        } 
                                                                                                                        else {
                                                                                                                            resultadoOperacion = numero1 / numero2
                                                                                                                            resultado.innerText = 'El resultado de la división es: ' + resultadoOperacion
                                                                                                                        }
                                                                                                                    }
                                                                                                                        else if (seleccion === 'pot') {
                                                                                                                            resultadoOperacion = Math.pow (numero1, numero2)
                                                                                                                            resultado.innerText = 'El resultado de la potencia es: ' + resultadoOperacion
                                                                                                                        }
                                                                                                    }

                                                                                                        function limpiar () {
                                                                                                            let numero1 = document.getElementById('id_num1').value = ""
                                                                                                            let numero2 = document.getElementById('id_num2').value = ""
                                                                                                            document.getElementById('resultado').innerText = ""
                                                                                                        }