

// On attend que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
  const box3D = document.getElementById('3dCarrouselBox');
  const prevBtn = document.getElementById('prevBtn3D');
  const nextBtn = document.getElementById('nextBtn3D');
  const pauseBtn = document.getElementById('pauseBtn3D');

  if (!box3D) return; // Sécurité si l'élément n'existe pas sur la page

  let currentAngle = 0;

  // Bouton Suivant
  nextBtn?.addEventListener('click', () => {
    box3D.classList.add('paused');
    currentAngle -= 60; // 360deg / 6 images = 60deg
    box3D.style.transform = `rotateY(${currentAngle}deg)`;
  });

  // Bouton Précédent
  prevBtn?.addEventListener('click', () => {
    box3D.classList.add('paused');
    currentAngle += 60;
    box3D.style.transform = `rotateY(${currentAngle}deg)`;
  });

  // Bouton Play / Pause
  pauseBtn?.addEventListener('click', () => {
    box3D.classList.toggle('paused');
  });
});










/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];


// Remplace par le nom exact de tes images
const images = [
  "image13.jpg",
  "image14.jpg",
  "image15.jpg",
  "image16.jpg",
  "image17.jpg",
  "image18.jpg",
  "image19.jpg",
  "image20.jpg"
];

let currentIndex = 0;
let isPlaying = true;
let timer = null;









function initCarousel() {
  const stage = document.getElementById("carouselStage");
  if (!stage) return;

  stage.innerHTML = "";

  // Création des cartes
  images.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "carousel-card";
    card.innerHTML = `<img src="${src}" alt="Projet ${index + 1}">`;
    card.addEventListener("click", () => goToIndex(index));
    stage.appendChild(card);
  });

  // Événements boutons
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  document.getElementById("nextBtn")?.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  document.getElementById("toggleBtn")?.addEventListener("click", togglePlay);

  updateCarousel();
  startAutoPlay();
}

function updateCarousel() {
  const cards = document.querySelectorAll(".carousel-card");
  const total = cards.length;

  cards.forEach((card, i) => {
    let offset = i - currentIndex;

    // Calcul de la boucle circulaire
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // Calcul 3D pour la disposition en cercle
    const translateX = offset * 130;
    const translateZ = -Math.abs(offset) * 90;
    const rotateY = offset * -15;
    const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.2;

    // Application du mouvement
    card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
    card.style.opacity = opacity;
    card.style.zIndex = total - Math.abs(offset);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function goToIndex(index) {
  currentIndex = index;
  updateCarousel();
  resetAutoPlay();
}

function startAutoPlay() {
  stopAutoPlay();
  if (isPlaying) {
    timer = setInterval(nextSlide, 2500); // Mouvement automatique toutes les 2,5s
  }
}

function stopAutoPlay() {
  if (timer) clearInterval(timer);
}

function resetAutoPlay() {
  if (isPlaying) {
    startAutoPlay();
  }
}

function togglePlay() {
  isPlaying = !isPlaying;
  const toggleBtn = document.getElementById("toggleBtn");
  if (isPlaying) {
    startAutoPlay();
    if (toggleBtn) toggleBtn.textContent = "Pause";
  } else {
    stopAutoPlay();
    if (toggleBtn) toggleBtn.textContent = "Jouer";
  }
}

// Lancement automatique
document.addEventListener("DOMContentLoaded", initCarousel);









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





/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];


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









document.addEventListener('DOMContentLoaded', initGallery);
*/




/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];



// 1. Liste de tes photos
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  { src: "image14.jpg", title: "Projet 2" },
  { src: "image15.jpg", title: "Projet 3" },
  { src: "image16.jpg", title: "Projet 4" },
  { src: "image17.jpg", title: "Projet 5" },
  { src: "image18.jpg", title: "Projet 6" },
  { src: "image19.jpg", title: "Projet 7" },
  { src: "image20.jpg", title: "Projet 8" },
  { src: "image21.jpg", title: "Projet 9" },
  { src: "image22.jpg", title: "Projet 10" },
  { src: "image25.jpg", title: "Projet 11" },
  { src: "image29.jpg", title: "Projet 12" }
];


let autoTimer = null;




document.addEventListener('DOMContentLoaded', initGallery);
*/


/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];




// 2. Initialisation de la galerie
function initGallery() {
  const stage = document.getElementById('stage');
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!stage || !dotsContainer) return;

  // Vider le conteneur
  stage.innerHTML = '';
  dotsContainer.innerHTML = '';

  // Création des cartes d'images
  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${photo.src}" alt="${photo.title}">`;
    card.addEventListener('click', () => goToSlide(index));
    stage.appendChild(card);

    // Création des puces (dots)
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Boutons de navigation
  prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Pause au survol
  stage.addEventListener('mouseenter', stopAutoPlay);
  stage.addEventListener('mouseleave', startAutoPlay);

  updateDisplay();
  startAutoPlay();
}

// 3. Mise à jour des positions et de l'affichage
function updateDisplay() {
  const cards = document.querySelectorAll('#stage .card');
  const dots = document.querySelectorAll('#dotsContainer .dot');
  const frameLabel = document.getElementById('frameLabel');
  const frameCount = document.getElementById('frameCount');

  if (cards.length === 0) return;

  // Boucle circulaire sur les index
  if (currentIndex < 0) currentIndex = photos.length - 1;
  if (currentIndex >= photos.length) currentIndex = 0;

  // Mise à jour des textes
  if (frameLabel) frameLabel.textContent = photos[currentIndex].title.toUpperCase();
  if (frameCount) {
    const num = String(currentIndex + 1).padStart(2, '0');
    const total = String(photos.length).padStart(2, '0');
    frameCount.textContent = `${num} / ${total}`;
  }

  // Animation des cartes (centrage de la carte active)
  cards.forEach((card, idx) => {
    card.classList.remove('active');
    card.style.display = 'block';
  });

  cards[currentIndex].classList.add('active');

  // Mise à jour des puces
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateDisplay();
  startAutoPlay();
}

function startAutoPlay() {
  stopAutoPlay();
  autoTimer = setInterval(() => {
    currentIndex++;
    updateDisplay();
  }, 3500);
}

function stopAutoPlay() {
  if (autoTimer) clearInterval(autoTimer);
}

// Lancement au chargement complet
document.addEventListener('DOMContentLoaded', initGallery);






document.addEventListener('DOMContentLoaded', initGallery);
*/




// ==========================================================================
// ANIMATION DU CARROUSEL BLEU (SLIDER INTERACTIF)
// ==========================================================================


let autoSlideInterval = null;

// Fonction pour mettre à jour l'affichage
function updateSlider(index) {
  const cards = document.querySelectorAll('.slider-container .card');
  const dots = document.querySelectorAll('.dots .dot');
  const projectTitle = document.querySelector('.project-title');
  const projectCount = document.querySelector('.project-count');

  if (cards.length === 0) return;

  // Corrige l'index si on dépasse le nombre total
  if (index >= photos.length) currentIndex = 0;
  else if (index < 0) currentIndex = photos.length - 1;
  else currentIndex = index;

  // 1. Mise à jour des textes
  const currentPhoto = photos[currentIndex];
  if (projectTitle) projectTitle.textContent = currentPhoto.title.toUpperCase();
  if (projectCount) {
    const formattedNum = String(currentIndex + 1).padStart(2, '0');
    const formattedTotal = String(photos.length).padStart(2, '0');
    projectCount.textContent = `${formattedNum} / ${formattedTotal}`;
  }

  // 2. Mise à jour des cartes (met la classe 'active' sur la carte centrale)
  cards.forEach((card, i) => {
    card.classList.remove('active');
    // Injection dynamique des images selon le décalage
    const photoIdx = (currentIndex + i - 2 + photos.length) % photos.length;
    const img = card.querySelector('img');
    if (img && photos[photoIdx]) {
      img.src = photos[photoIdx].src;
    }
  });

  // La carte du milieu (index 2 dans le HTML) prend l'effet d'agrandissement
  if (cards[2]) cards[2].classList.add('active');

  // 3. Mise à jour des points lumineux en bas
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex % dots.length);
  });
}

// Lancement du défilement automatique toutes les 3,5 secondes
function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    updateSlider(currentIndex + 1);
  }, 3500);
}

function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// Initialisation des événements au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.slider-controls .nav-btn:first-child');
  const nextBtn = document.querySelector('.slider-controls .nav-btn:last-child');
  const dots = document.querySelectorAll('.dots .dot');
  const sliderBox = document.querySelector('.project-card');

  // Clic bouton Précédent (<)
  prevBtn?.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
    startAutoSlide(); // Redémarre le minuteur au clic
  });

  // Clic bouton Suivant (>)
  nextBtn?.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
    startAutoSlide();
  });

  // Clic sur les points de navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateSlider(i);
      startAutoSlide();
    });
  });

  // Pause l'animation au survol de la souris
  sliderBox?.addEventListener('mouseenter', stopAutoSlide);
  sliderBox?.addEventListener('mouseleave', startAutoSlide);

  // Premier affichage et démarrage
  updateSlider(0);
  startAutoSlide();
});











/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];



const photos  = [
  { src: "image13.jpg", title: "Projet 1" },
  { src: "image14.jpg", title: "Projet 2" },
  { src: "image15.jpg", title: "Projet 3" },
  { src: "image16.jpg", title: "Projet 4" },
  { src: "image17.jpg", title: "Projet 5" },
  { src: "image18.jpg", title: "Projet 6" },
  { src: "image19.jpg", title: "Projet 7" },
  { src: "image20.jpg", title: "Projet 8" },
  { src: "image21.jpg", title: "Projet 9" },
  { src: "image22.jpg", title: "Projet 10" },
  { src: "image25.jpg", title: "Projet 11" },
  { src: "image29.jpg", title: "Projet 12" }
];

let currentIndex = 0;



/*
const photos = [
  { src: "image13.jpg", title: "Projet 1" },
  ...
];





function initSlider() {
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const stage = document.getElementById('stage');

  if (!stage || !dotsContainer) return;

  // Générer les puces (dots)
  dotsContainer.innerHTML = '';
  photos.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  // Événements boutons
  prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Pause au survol
  stage.addEventListener('mouseenter', stopAutoPlay);
  stage.addEventListener('mouseleave', startAutoPlay);

  updateDisplay();
  startAutoPlay();
}

function updateDisplay() {
  const cards = document.querySelectorAll('#stage .card');
  const dots = document.querySelectorAll('#dotsContainer .dot');
  const frameLabel = document.getElementById('frameLabel');
  const frameCount = document.getElementById('frameCount');
  const total = photos.length;

  // Gestion de l'index circulaire
  if (currentIndex < 0) currentIndex = total - 1;
  if (currentIndex >= total) currentIndex = 0;

  // Mise à jour des titres
  if (frameLabel) frameLabel.textContent = photos[currentIndex].title.toUpperCase();
  if (frameCount) {
    const num = String(currentIndex + 1).padStart(2, '0');
    const tot = String(total).padStart(2, '0');
    frameCount.textContent = `${num} / ${tot}`;
  }

  // Décalage pour afficher 5 cartes (-2, -1, 0, +1, +2)
  const offsets = [-2, -1, 0, 1, 2];
  const classNames = ['pos-2', 'pos-1', 'pos-0', 'pos1', 'pos2'];

  cards.forEach((card, i) => {
    const offset = offsets[i];
    const photoIndex = (currentIndex + offset + total) % total;
    const img = card.querySelector('img');

    if (img && photos[photoIndex]) {
      img.src = photos[photoIndex].src;
    }

    // Appliquer la classe de position 3D
    card.className = `card ${classNames[i]}`;
    card.onclick = () => goToSlide(currentIndex + offset);
  });

  // Puces actives
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateDisplay();
  startAutoPlay();
}

function startAutoPlay() {
  stopAutoPlay();
  autoTimer = setInterval(() => {
    currentIndex++;
    updateDisplay();
  }, 3500);
}

function stopAutoPlay() {
  if (autoTimer) clearInterval(autoTimer);
}

document.addEventListener('DOMContentLoaded', initSlider);











document.addEventListener('DOMContentLoaded', initGallery);
*/


















// On attend que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
  const box3D = document.getElementById('3dCarrouselBox');
  const prevBtn = document.getElementById('prevBtn3D');
  const nextBtn = document.getElementById('nextBtn3D');
  const pauseBtn = document.getElementById('pauseBtn3D');

  if (!box3D) return; // Sécurité si l'élément n'existe pas sur la page

  let currentAngle = 0;

  // Bouton Suivant
  nextBtn?.addEventListener('click', () => {
    box3D.classList.add('paused');
    currentAngle -= 60; // 360deg / 6 images = 60deg
    box3D.style.transform = `rotateY(${currentAngle}deg)`;
  });

  // Bouton Précédent
  prevBtn?.addEventListener('click', () => {
    box3D.classList.add('paused');
    currentAngle += 60;
    box3D.style.transform = `rotateY(${currentAngle}deg)`;
  });

  // Bouton Play / Pause
  pauseBtn?.addEventListener('click', () => {
    box3D.classList.toggle('paused');
  });
});