function downloadCurriculo() {
    // URL do currículo em PDF
    var curriculoURL = 'http://drive.google.com/u/0/uc?id=1zYvnaCvALUofDbX18_krscTU7hI2bCbA&export=download';

    // Cria um elemento <a> invisível
    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    // Define a URL do currículo no atributo 'href' do elemento <a>
    link.href = curriculoURL;

    // Define o nome do arquivo ao fazer o download
    link.download = 'curriculo.pdf';

    // Simula um clique no link para iniciar o download
    link.click();

    // Remove o elemento <a> após o download
    document.body.removeChild(link);
};