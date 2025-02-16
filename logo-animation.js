// Create SVG logo animation
const createLogoAnimation = () => {
    const logoContainer = document.querySelector('.logo');
    
    // Clear existing content
    logoContainer.innerHTML = '';
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 50');
    svg.style.width = '120px';
    svg.style.height = '30px';
    
    // Create paths for the logo
    const pathData = [
        // Letter A
        'M20,40 L30,10 L40,40 M25,30 L35,30',
        // Letter n
        'M50,40 L50,20 C50,15 55,10 60,10 C65,10 70,15 70,20 L70,40',
        // Letter i
        'M80,40 L80,20 M80,10 L80,12',
        // Letter G
        'M100,25 C100,15 108,10 115,10 C122,10 130,15 130,25 C130,35 122,40 115,40 C108,40 100,35 100,25 M115,25 L130,25',
        // Letter e
        'M140,25 C140,15 148,10 155,10 C162,10 170,15 170,25 C170,35 162,40 155,40 C148,40 140,35 140,25 M140,25 L170,25',
        // Letter n
        'M180,40 L180,20 C180,15 185,10 190,10 C195,10 200,15 200,20 L200,40'
    ];
    
    // Add paths to SVG
    pathData.forEach(d => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', 'url(#logo-gradient)');
        path.setAttribute('stroke-width', '3');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(path);
    });
    
    // Add gradient definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'logo-gradient');
    gradient.setAttribute('gradientTransform', 'rotate(90)');
    
    const stops = [
        { offset: '0%', color: '#31B495' },
        { offset: '100%', color: '#1EB2D8' }
    ];
    
    stops.forEach(({ offset, color }) => {
        const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop.setAttribute('offset', offset);
        stop.setAttribute('stop-color', color);
        gradient.appendChild(stop);
    });
    
    defs.appendChild(gradient);
    svg.appendChild(defs);
    logoContainer.appendChild(svg);
    
    // Animate the paths
    const paths = svg.querySelectorAll('path');
    paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    });
    
    anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
};

// Initialize logo animation
document.addEventListener('DOMContentLoaded', createLogoAnimation); 