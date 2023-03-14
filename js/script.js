function calcular(){
    let text = document.getElementById ('texto').value;      // O GET...busca o id de uma tag HTML

    let result = text.split(' ').length;

    document.getElementById('resultado').innerHTML = "O texto que você digitou possui: " + result + " palavras...satisfeito? :p";

}