function clicar(){
    //alert("Cliiiiiiiiicouuuu!!!!!");
    document.getElementById("agradecer").innerHTML = "<b>Abrindo google</b>";
    window.open("http://www.google.com");
    //window.location.href="http://www.globo.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

/*
function soma(n1, n2){
    return n1 + n2;
}

alert((soma(parseInt(prompt("Digite o 1 numero")),parseInt(prompt("Digite o 2 numero")))));



/*
var d = new Date();
alert(d.getDay()-1);
alert(d.getHours());

/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
}


/*
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1; /*ou conut++
}

/*
var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("Você é maior de idade");
}else{
    alert("Você é menor de idade");
}



/*var frutas = [{nome: "maça", cor: "vermelho"},{nome:"uva", cor:"roxo"}];
console.log(frutas);
alert(frutas[1].nome);

/*
var fruta = {nome: "maça", cor: "vermelho"};
console.log(fruta);
alert(fruta.nome);
console.log(fruta.cor);

/*
var lista = ["maça","pera","laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var nome = "Edmilson Sanches";
var idade = 44;
var idade2 = 10;
var frase = "Guarani é o pior time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("pior", "melhor").toUpperCase());
//console.log(frase.replace("pior","melhor"));
//alert(frase.replace("pior","melhor"));
*/