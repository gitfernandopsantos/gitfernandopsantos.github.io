function downloadCurriculo() {
    var curriculoURL = 'https://drive.google.com/u/0/uc?export=download&id=1weZrODBaJ-giLv6x9R34kd50E01tqp87';
    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.href = curriculoURL;
    link.download = 'curriculo.pdf';
    link.click();
    document.body.removeChild(link);
};