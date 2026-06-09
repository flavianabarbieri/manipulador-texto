function formatarNome() {
   
    const excecoes = ["de", "da", "do", "das", "dos", "e"];

    const texto = document.getElementById("texto");

    const palavras = texto.value
        .trim()
        .toLowerCase()
        .split(/\s+/);

    const resultado = palavras.map(palavra => {
        if (excecoes.includes(palavra)) {
            return palavra;
        }

        return palavra.charAt(0).toUpperCase() + ".";
    });

    texto.value = resultado.join(" ");
}