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


//   document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
//     link.addEventListener('click', function () {
//       const header = document.getElementById('header');
//       header.classList.add('header-top');
//     });
//   });


const largura = window.innerWidth;
const altura = window.innerHeight;

console.log(`Largura: ${largura}px, Altura: ${altura}px`);

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
  }

  // Define idioma padrão
  window.onload = () => setLanguage('pt');

  

function openModal(title, body, imageUrls) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = body;


    const imageList = document.getElementById('imageList');
    imageList.innerHTML = '';
if(imageUrls != null){
    imageUrls.forEach(url => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'me-2 mb-2';

        const img = document.createElement('img');
        img.src = url;
        img.alt = "Imagem do projeto";
        img.className = 'img-fluid';
        img.style.maxHeight = '150px';
        img.style.width = 'auto';

        imgContainer.appendChild(img);
        imageList.appendChild(imgContainer);
    });
}


    var modal = new bootstrap.Modal(document.getElementById('modalProjeto'));
    modal.show();
}


function removeDuplicateBackdrops() {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    if (backdrops.length > 1) {
        for (let i = 1; i < backdrops.length; i++) {
            backdrops[i].remove();
        }
    }
}

function closeModal() {
    var modal = bootstrap.Modal.getInstance(document.getElementById('modalProjeto'));
    if (modal) {
        modal.hide();
        setTimeout(() => {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
        }, 300);
    }

    var backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(function (backdrop) {
        backdrop.remove();
    });
}


