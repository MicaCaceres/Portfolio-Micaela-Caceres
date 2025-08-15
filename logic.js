function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Duración de animación aleatoria
        const duration = Math.random() * 6 + 4;
        particle.style.animationDuration = duration + 's';
        
        // Delay aleatorio
        const delay = Math.random() * 2;
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
    }
}

// Crear formas geométricas
function createGeometricShapes() {
    const container = document.getElementById('shapes');
    const shapes = ['triangle', 'square', 'circle'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shape.className = `shape ${shapeType}`;
        
        // Posición aleatoria
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        
        // Duración de animación aleatoria
        const duration = Math.random() * 20 + 10;
        shape.style.animationDuration = duration + 's';
        
        // Delay aleatorio
        const delay = Math.random() * 5;
        shape.style.animationDelay = delay + 's';
        
        container.appendChild(shape);
    }
}

// Efecto de mouse (opcional)
function addMouseEffect() {
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index % 5 + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Inicializar todo cuando la página cargue
window.addEventListener('load', () => {
    createParticles();
    createGeometricShapes();
    addMouseEffect();
});

// Regenerar partículas cada 30 segundos para mantener el efecto fresco
setInterval(() => {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    createParticles();
}, 30000);


import { proyectos , habilidades } from './constants.js'

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {



const proyectosContainer = document.querySelector('.proyectos-container');

proyectos.forEach(proyecto => {
    const card = document.createElement('a');
    card.classList.add('proyecto-card');
    card.href=`${proyecto.htmlLink}`;
  
    card.innerHTML = `
    <img src="${proyecto.imagenUrl}" alt="Imagen del proyecto ${proyecto.titulo}">
    <div class="overlay">
      <h3>${proyecto.titulo}</h3>
    </div>
    `;

    proyectosContainer.appendChild(card);
})

const habilidadesContainer = document.querySelector('.habilidades-container');


habilidades.forEach(habilidad => {
    const card = document.createElement('div');
    card.classList.add('habilidad-card');
    
    card.innerHTML = `
    <h3>${habilidad.campo}<h3>
    `;
    let hab
    for (hab in habilidad){
        let h = habilidad[hab]
        if (hab === "campo"){
            continue}
        if (h === "C#"){
            card.innerHTML += `
            <span><img src="imgs/C Sharp.svg" class="icon">${h}<span>
            `;
            continue}
        card.innerHTML += `
        <span><img src="imgs/${h}.svg" class="icon">${h}<span>
        `;
    }

    habilidadesContainer.appendChild(card);
})

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
}