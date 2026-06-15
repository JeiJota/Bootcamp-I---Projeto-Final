const username = 'JeiJota';

// Executa assim que a página termina de carregar
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
    fetchRepositories();
});

// Busca dados do perfil
async function fetchUserData() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Erro ao buscar usuário');
        const data = await response.json();

        document.getElementById('gh-avatar').src = data.avatar_url;
        document.getElementById('gh-name').textContent = data.name || username;
        document.getElementById('gh-bio').textContent = data.bio || "Estudante de Engenharia de Software | Full-Stack Developer";
        document.getElementById('gh-repos').textContent = data.public_repos;
        document.getElementById('gh-followers').textContent = data.followers;
        document.getElementById('gh-following').textContent = data.following;
        document.getElementById('gh-link').href = data.html_url;
    } catch (error) {
        console.error(error);
        document.getElementById('gh-name').textContent = "Joabe";
        document.getElementById('gh-bio').textContent = "Não foi possível carregar os dados em tempo real do GitHub.";
    }
}

// Busca repositórios
async function fetchRepositories() {
    const reposContainer = document.getElementById('github-repos-list');
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Erro ao buscar repositórios');
        const repos = await response.json();

        reposContainer.innerHTML = ''; // Limpa a mensagem de "Carregando"

        if(repos.length === 0) {
            reposContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #b3b3b3;">Nenhum repositório público encontrado.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image-placeholder">
                    <i class="fas fa-folder-open project-img-icon"></i>
                </div>
                <div class="project-info">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Projeto desenvolvido focado em engenharia e boas práticas de código.'}</p>
                    <div class="badges">
                        <span>${repo.language || 'Geral'}</span>
                    </div>
                    <div class="project-card-footer">
                        <a href="${repo.html_url}" target="_blank" class="project-link">Ver Código <i class="fas fa-arrow-right"></i></a>
                        <a href="${repo.html_url}" target="_blank" class="project-github-icon-link"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;
            reposContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        reposContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ff949a;">Ocorreu um erro ao conectar-se com o GitHub.</p>';
    }
}

// Menu Mobile Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}