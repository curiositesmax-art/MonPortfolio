// 1. Liste de tes photos (TOUT EN HAUT du fichier)
// Note : j'ai mis "image4.png" car dans ton dossier à gauche c'est un fichier .PNG !
const photos = [
    { src: "image13.jpg", title: "Projet 1" },
    { src: "image14.jpg", title: "Projet 2" },
    { src: "image15.jpg", title: "Projet 3" },
    { src: "image16.jpg", title: "Projet 4"},
    { src: "image17.jpg", title: "Projet 5" },
    { src: "image18.jpg", title: "Projet 6" },
    { src: "image19.jpg", title: "Projet 7" },
    { src: "image20.jpg", title: "Projet 8" },
    { src: "image21.jpg", title: "Projet 9" },
    { src: "image22.jpg", title: "Projet 10"},
    { src: "image25.jpg", title: "Projet 11"},
    { src: "image29.jpg", title: "Projet 12"},
];

let currentIndex = 0;

// 2. Récupération des éléments de la page
const stage = document.getElementById('stage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const frameCount = document.getElementById('frameCount');
const frameLabel = document.getElementById('frameLabel');
const dotsContainer = document.getElementById('dotsContainer');

// 3. Création des images dans la galerie
function initGallery() {
    if (!stage || !dotsContainer) return;

    stage.innerHTML = '';
    dotsContainer.innerHTML = '';

    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${photo.src}" alt="${photo.title}">`;
        stage.appendChild(card);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active-dot');
        dotsContainer.appendChild(dot);
    });

    updateCarousel();
}

// 4. Fonction pour faire tourner le carrousel 3D
function updateCarousel() {
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach((card, index) => {
        card.className = 'card';

        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === currentIndex - 1) {
            card.classList.add('left-1');
        } else if (index === currentIndex - 2) {
            card.classList.add('left-2');
        } else if (index === currentIndex + 1) {
            card.classList.add('right-1');
        } else if (index === currentIndex + 2) {
            card.classList.add('right-2');
        } else {
            card.classList.add('hidden');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentIndex);
    });

    if (frameCount) {
        const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
        const formattedTotal = String(photos.length).padStart(2, '0');
        frameCount.textContent = `${formattedCurrent} / ${formattedTotal}`;
    }

    if (frameLabel) {
        const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
        frameLabel.textContent = `PROJET ${formattedCurrent}`;
    }
}

// 5. Événement clic sur la flèche Gauche (<)
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = photos.length - 1;
        }
        updateCarousel();
    });
}

// 6. Événement clic sur la flèche Droite (>)
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentIndex < photos.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
}

// 7. Lancer la galerie au chargement de la page
initGallery();