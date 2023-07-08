function calcularValorPresenteAnualidad(n,i,R){
    if(n<=0||i<=0||R<=0){
        return "Error, los datos no pueden ser menores a 1"
    }else{
        let S=R*(((1+i)**n-1)/i);
        return S.toFixed(2);
    }
    
}