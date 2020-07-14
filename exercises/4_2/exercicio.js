let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

console.log(numbers);

for(let i=0; i < numbers.length; i++){
   soma += numbers[i];
    if(soma>20){
       console.log("Valores maiores que 20: " +  soma);
    }
        else{
            console.log("Valores menores que 20: " +soma);

        }
}   
    //Exercicios 2,3 e 4

    console.log("\n");
    console.log(soma);
    console.log(soma/numbers.length)
   
    //Exercicios 5 e 7

for (let i=0; i < numbers.length; i++){
    for(let j=i; j<numbers.length; j++){
        if(numbers[i] > numbers[j]){
            aux = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = aux

        }
    }
}
    console.log(numbers)
    console.log("\n")

for (let i=0; i < numbers.length; i++){
    if (numbers[i] % 2 ==0){
        console.log ("Numero Par")

    }else{
        console.log("Numero Impar")
    }
}