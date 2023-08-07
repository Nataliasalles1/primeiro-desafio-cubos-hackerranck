let palavra = "lOck"; 

if(palavra === palavra.charAt(0).toLowerCase() + palavra.substring(1).toUpperCase()){
    palavra = palavra.charAt(0).toUpperCase() + palavra.substring(1).toLowerCase();
    console.log(palavra)
}else if (palavra === palavra.toUpperCase()) {
    palavra = palavra.toLowerCase();
    console.log(palavra)
} else {
    palavra = palavra.toLowerCase()
    console.log(palavra)
}
