contadorAsteriscos(5)

function contadorAsteriscos(linha) {
let padrao = " ";

    for(let li = 0; li <= linha; li++ ){
        for(let ci = 0; ci <= linha; ci++){
            if(ci < padrao){
                padrao += " ";
            } else {
                padrao += "*"
            }
        }
        console.log(padrao);
        padrao = " ";
        padrao--;
    }
}