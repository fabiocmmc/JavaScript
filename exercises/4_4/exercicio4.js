
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
  };

 
 
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };
 
        
        console.log(info.personagem + " e " + info2.personagem);
        console.log(info.origem + " e " +info2.origem);   
        console.log(info.nota + " e " +info2.nota);   
        console.log(info.recorrente + " e " +info2.recorrente);   


function verificaPalindrome(palavra){
    let palavra = "arara"
   
    if(palavra === palavra.split('').reverse().join('')){
        console.log(palavra + "e Palindrome")
    }
    else{
        console.log(palavra + " nao e um palindrome");
    }
    return palavra;
}