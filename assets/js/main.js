// Menu mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Integração com Patreon
async function loadPatreonContent() {
    try {
        const response = await fetch('API_ENDPOINT_PATREON');
        const data = await response.json();
        updateFeaturedWorks(data);
    } catch (error) {
        console.error('Erro ao carregar conteúdo do Patreon:', error);
    }
}

function updateFeaturedWorks(data) {
    const featuredSection = document.querySelector('.featured-works');
    // Implementar lógica de exibição do conteúdo
}
