let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length; // Número total de páginas basadas en la cantidad de elementos con clase 'page'
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const timelineBtn = document.getElementById('timelineBtn');
const timeline = document.getElementById('timeline');

// Mostrar la primera página
pages[0].classList.add('visible');

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateBook();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateBook();
    }
});

timelineBtn.addEventListener('click', () => {
    displayTimeline();
});

function updateBook() {
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.classList.add('visible');
        } else {
            page.classList.remove('visible');
        }
    });

    // Mostrar el botón de la línea del tiempo cuando estés en la última página
    if (currentPage === totalPages) {
        timelineBtn.style.display = 'inline-block';
    } else {
        timelineBtn.style.display = 'none';
    }
}

function displayTimeline() {
    timeline.innerHTML = ''; // Limpiar el contenedor de la línea de tiempo

    pages.forEach(page => {
        const pageClone = document.createElement('div');
        const title = page.querySelector('h2').cloneNode(true); // Clonar el título
        const text = page.querySelector('ul') || page.querySelector('p'); // Clonar el texto (ul o p)

        pageClone.appendChild(title); // Añadir el título al clon
        if (text) {
            pageClone.appendChild(text.cloneNode(true)); // Añadir el texto al clon
        }

        pageClone.classList.add('timeline-item');
        timeline.appendChild(pageClone);
    });

    document.querySelector('.timeline-container').style.display = 'block'; // Mostrar la línea de tiempo
}
