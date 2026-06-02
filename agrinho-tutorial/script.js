// Script principal - Tutorial Agrinho 2026

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Remover classe active de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Adicionar classe active ao botão clicado e seu conteúdo
        button.classList.add('active');
        const tabContent = document.getElementById(tabName + '-tab');
        if (tabContent) {
            tabContent.classList.add('active');
        }
    });
});

// Toggle Code Preview
const toggleButtons = document.querySelectorAll('.toggle-code');
toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const fileId = button.getAttribute('data-file');
        const codePreview = document.getElementById(fileId + '-code');
        
        if (codePreview) {
            codePreview.classList.toggle('active');
            button.textContent = codePreview.classList.contains('active') ? 'Ocultar código' : 'Ver código';
        }
    });
});

// Modelo File Tabs
const fileTabs = document.querySelectorAll('.file-tab');
fileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Remover classe active de todos os tabs e conteúdos
        fileTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.modelo-content').forEach(content => {
            content.classList.add('hidden');
        });
        
        // Adicionar classe active ao tab clicado e seu conteúdo
        tab.classList.add('active');
        const content = document.getElementById(tabName);
        if (content) {
            content.classList.remove('hidden');
        }
    });
});

// Calculadora de Economia (Demo)
function calcularEconomiaDemo() {
    const area = parseFloat(document.getElementById('demoArea').value);
    const resultado = document.getElementById('demoResultado');
    
    if (isNaN(area) || area <= 0) {
        resultado.textContent = '❌ Por favor, insira uma área válida (número maior que zero).';
        resultado.style.color = '#ff6464';
        return;
    }
    
    // 1.500 litros por hectare por dia
    const economia = area * 1500;
    resultado.innerHTML = `💧 Com práticas sustentáveis, você economiza <strong>${economia.toLocaleString('pt-BR')} litros de água</strong> por dia!`;
    resultado.style.color = '#2d6a2d';
}

// Permitir Enter no input da calculadora
const demoArea = document.getElementById('demoArea');
if (demoArea) {
    demoArea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calcularEconomiaDemo();
        }
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar animação aos elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar observer a elementos de cards
document.querySelectorAll('.subcategory-card, .tool-card, .step, .tip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Log de carregamento
console.log('✓ Tutorial Agrinho 2026 carregado com sucesso! 🌱');
console.log('📚 Versão 1.0 - Pronto para auxiliar estudantes');