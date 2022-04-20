// pegando a URL do usuario da local storage e aplicando na funcao avatar, que será chamada no load da pagina de tarefas:
let avatarURL = localStorage.getItem("avatar");

function avatar() {
    let foto = document.querySelector(".user-image");
    let imagem = document.createElement("img");
    imagem.setAttribute("src", avatarURL);
    foto.appendChild(imagem);
}