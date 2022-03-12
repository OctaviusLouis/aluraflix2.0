function adicionarFilme(){

    let filmeFavorito = document.getElementById("inserir").value;

    if(filmeFavorito.endsWith(".jpg")){
       listarFilmes(filmeFavorito);
    }else{
        alert("Erro! Código invalido");
}
       
    document.getElementById("inserir").value = "";
}
function listarFilmes(filme){
    let elementoFavorito = "<img src=" + filme + ">";
    let elementoListaFilmes = document.getElementById("listaFilme");

    elementoListaFilmes.innerHTML += elementoFavorito;
}