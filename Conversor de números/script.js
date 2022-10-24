const numberMap = {
		
    0 : [
         ''		
        ,'I' 	
        ,'II'	
        ,'III'	
        ,'IV'	
        ,'V'	
        ,'VI'	
        ,'VII'	
        ,'VIII'	
        ,'IX'					
    ]
    ,1 : [
         ''	
        ,'X'	
        ,'XX'   
        ,'XXX' 
        ,'XL'   
        ,'L'    
        ,'LX'   
        ,'LXX'  
        ,'LXXX' 
        ,'XC'   
    ]
    ,2 : [
        ''
        ,'C'	
        ,'CC'  
        ,'CCC'  				
        ,'CD'   
        ,'D'    
        ,'DC'   
        ,'DCC'  
        ,'DCCC' 
        ,'CM' 	
    ]
    ,3 : [
         ''
        ,'M'
        ,'MM'
        ,'MMM'
        ,
    ]
};
function romano(input){	
 

    var orderNumber = Number(input).toString();
    var orderLength = orderNumber.length;
    
    
    var unidadeDezenaCentena = orderLength - 1;
    
    
    var newOrder = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        newOrder = newOrder + orderNumber.charAt(i);
    }
    
    var finalCast = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        var auxVar = parseInt(newOrder.charAt(i));
        finalCast = finalCast + numberMap[i][auxVar];
    }
    
    return finalCast;
    
}


document.getElementById("decimal").addEventListener('keyup', function() {		
    var romanNumber = romano(this.value);
    
    document.getElementById("roman").value = romanNumber;
    
    var numberCheck = this.value.replace(/[^0-9]/, "");
    if(numberCheck == '') return false;
    
})

function converterParaInteiros(num) {

    if (num == "") { return "Valor não adicionado!" }

    let tamanhoString = num.length
    var numeroFinal = 0
    var auxiliadora = 1001
    var excessoDeDivisorPorCinco = false
    var excessoDeDivisorPorDez = false
    var listaDivisoresPorCinco = new Map([["V", 0], ["L", 0], ["D", 0]]);
    var contadorDivisoresPorDez = 1
    var auxiliadoraDivisoresPorDez = ""

    for (var i = 0; i < tamanhoString; i++) {

        let numeroSomado = somarRomanos(num[i])

        if (numeroSomado > numeroFinal && i > 1) { return "Sintaxe Errada!" }

        if (numeroSomado == 5 || numeroSomado == 50 || numeroSomado == 500) {
            let value = listaDivisoresPorCinco.get(num[i]) + 1
            listaDivisoresPorCinco.set(num[i], value)
            if (value > 1) {
                excessoDeDivisorPorCinco = true
            }
        }

        if (numeroSomado == 1 || numeroSomado == 10 || numeroSomado == 100 || numeroSomado == 1000) {

            if (num[i] == auxiliadoraDivisoresPorDez) {
                contadorDivisoresPorDez++
            } else {
                contadorDivisoresPorDez = 1
            }

            if (contadorDivisoresPorDez > 3) { excessoDeDivisorPorDez = true }

            auxiliadoraDivisoresPorDez = num[i]
        }

        if (excessoDeDivisorPorCinco || excessoDeDivisorPorDez || numeroSomado == -1) {
            return "Sintaxe Errada!"
        } else {

            if (auxiliadora < numeroSomado) {
                numeroFinal = (numeroSomado - auxiliadora) + (numeroFinal - auxiliadora)
            } else {
                numeroFinal += numeroSomado
            }
        }
        auxiliadora = numeroSomado
    }


    if (numeroFinal >= 40000) { return "O número máximo é 3999!" }

    return numeroFinal.toString()
}

function somarRomanos(num) {
    switch (num) {
        case "M":
            return 1000
            break;
        case "D":
            return 500
            break;
        case "C":
            return 100
            break;
        case "L":
            return 50
            break;
        case "X":
            return 10
            break;
        case "V":
            return 5
            break;
        case "I":
            return 1
            break;
        default:
            return -1
            break;
    }

};

	