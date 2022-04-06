onload = function () {
    let tokenJwt = sessionStorage.getItem("jwt");
    if (!tokenJwt) {
        alert("Sem permisão para acessar a página, você será redirecionado");
        window.location.href = "index.html"
    } else {
        console.log(tokenJwt);
    }
}