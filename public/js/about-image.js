document.addEventListener('DOMContentLoaded', function() {
    
    const card = document.querySelector('.ar-card');
    if (!card) return;

    function initMatrixRain() {
        const matrixCanvas = card.querySelector('.matrix-canvas');
        if (!matrixCanvas) return;
        
        const ctx = matrixCanvas.getContext('2d');
        
        function resizeMatrix() {
            const rect = card.getBoundingClientRect();
            matrixCanvas.width = rect.width;
            matrixCanvas.height = rect.height;
        }
        
        resizeMatrix();
        window.addEventListener('resize', resizeMatrix);
        
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
        const fontSize = 14;
        let columns;
        let drops;
        
        function initDrops() {
            columns = Math.floor(matrixCanvas.width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
        }
        
        initDrops();
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            ctx.fillStyle = '#00ffff';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                
                const opacity = Math.random() * 0.5 + 0.2;
                ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
                ctx.fillText(char, x, y);
                
                if (Math.random() > 0.98) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fillText(char, x, y);
                }
                
                if (y > matrixCanvas.height + 50 && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
            
            requestAnimationFrame(drawMatrix);
        }
        
        drawMatrix();
    }

    function createDataParticles() {
        const container = card.querySelector('.ar-particles');
        if (!container) return;
        
        const binaryChars = ['0', '1'];
        const hexChars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        setInterval(() => {
            const particle = document.createElement('span');
            particle.classList.add('data-particle');
            
            const isBinary = Math.random() > 0.5;
            particle.textContent = isBinary 
                ? binaryChars[Math.floor(Math.random() * 2)]
                : hexChars[Math.floor(Math.random() * hexChars.length)];
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = 2 + Math.random() * 3 + 's';
            particle.style.fontSize = 0.4 + Math.random() * 0.4 + 'rem';
            
            container.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }, 200);
    }

    function init3DTilt() {
        let isInteracting = false;
        let currentRotateX = 0;
        let currentRotateY = 0;
        let targetRotateX = 0;
        let targetRotateY = 0;
        
        card.addEventListener('mousemove', (e) => {
            if (!isInteracting) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            targetRotateY = ((x - centerX) / centerX) * 25;
            targetRotateX = -((y - centerY) / centerY) * 25;
        });
        
        card.addEventListener('mousedown', () => {
            isInteracting = true;
            card.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseup', () => {
            isInteracting = false;
            targetRotateX = 0;
            targetRotateY = 0;
        });
        
        card.addEventListener('mouseleave', () => {
            isInteracting = false;
            targetRotateX = 0;
            targetRotateY = 0;
            card.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        function animate() {
            currentRotateX += (targetRotateX - currentRotateX) * 0.1;
            currentRotateY += (targetRotateY - currentRotateY) * 0.1;
            
            card.style.transform = `
                rotateX(${currentRotateX}deg) 
                rotateY(${currentRotateY}deg)
            `;
            
            const layers = card.querySelectorAll('.ar-layer');
            layers.forEach((layer, index) => {
                const depth = (index + 1) * 2;
                const translateZ = isInteracting ? depth * 2 : 0;
                layer.style.transform = `translateZ(${translateZ}px)`;
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    function drawCircuitPaths() {
        const svg = card.querySelector('.circuit-svg');
        if (!svg) return;
        
        svg.innerHTML = '';
        
        const paths = [
            { x1: 20, y1: 30, x2: 150, y2: 30 },
            { x1: 200, y1: 30, x2: 340, y2: 30 },
            { x1: 20, y1: 80, x2: 120, y2: 80 },
            { x1: 240, y1: 80, x2: 340, y2: 80 },
            { x1: 20, y1: 350, x2: 180, y2: 350 },
            { x1: 220, y1: 350, x2: 340, y2: 350 },
            { x1: 20, y1: 400, x2: 100, y2: 400 },
            { x1: 260, y1: 400, x2: 340, y2: 400 },
            
            { x1: 20, y1: 30, x2: 20, y2: 150 },
            { x1: 20, y1: 300, x2: 20, y2: 400 },
            { x1: 340, y1: 30, x2: 340, y2: 200 },
            { x1: 340, y1: 280, x2: 340, y2: 400 },
            
            { x1: 150, y1: 30, x2: 200, y2: 80 },
            { x1: 120, y1: 80, x2: 240, y2: 350 },
            { x1: 180, y1: 350, x2: 220, y2: 350 },
        ];
        
        paths.forEach((path, index) => {
            line.setAttribute('x1', path.x1);
            line.setAttribute('y1', path.y1);
            line.setAttribute('x2', path.x2);
            line.setAttribute('y2', path.y2);
            line.classList.add('circuit-path');
            line.style.animationDelay = index * 0.2 + 's';
            
            svg.appendChild(line);
        });
        
        const nodes = [
            { cx: 20, cy: 30 }, { cx: 150, cy: 30 }, { cx: 200, cy: 80 },
            { cx: 340, cy: 30 }, { cx: 120, cy: 80 }, { cx: 240, cy: 350 },
            { cx: 20, cy: 350 }, { cx: 340, cy: 350 }, { cx: 180, cy: 350 },
            { cx: 220, cy: 350 }, { cx: 20, cy: 400 }, { cx: 340, cy: 400 }
        ];
        
        nodes.forEach((node, index) => {
            circle.setAttribute('cx', node.cx);
            circle.setAttribute('cy', node.cy);
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', '#00ffff');
            circle.style.opacity = '0';
            circle.style.animation = `circuit-node-appear 0.5s ease forwards`;
            circle.style.animationDelay = (paths.length * 0.2) + (index * 0.1) + 's';
            
            svg.appendChild(circle);
        });
    }

    function initScannerEffect() {
        const scanner = card.querySelector('.ar-scanner');
        if (!scanner) return;
        
        card.addEventListener('mouseenter', () => {
            scanner.style.animationDuration = '2s';
        });
        
        card.addEventListener('mouseleave', () => {
            scanner.style.animationDuration = '4s';
        });
    }

    card.addEventListener('click', () => {
        const flash = card.querySelector('.ar-flash');
        flash.style.opacity = '1';
        
        setTimeout(() => {
            flash.style.opacity = '0';
        }, 200);
        
        const particles = card.querySelector('.ar-particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('span');
            particle.classList.add('data-particle');
            particle.textContent = Math.random() > 0.5 ? '1' : '0';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = '1s';
            particle.style.color = '#fff';
            
            particles.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    });

    initMatrixRain();
    createDataParticles();
    init3DTilt();
    drawCircuitPaths();
    initScannerEffect();

    console.log('🔷 Cyberpunk AR Identity Card initialized!');
});