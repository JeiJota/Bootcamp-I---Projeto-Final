# 🚀 Bootcamp I - Projeto Final: PortfolioHUB

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Andamento-beta?color=E50914&style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/GitHub%20API-OAuth%202.0-181717?style=for-the-badge&logo=github" alt="GitHub API">
  <img src="https://img.shields.io/badge/Security-OWASP%20Top%2010-green?style=for-the-badge" alt="OWASP Security">
  <img src="https://img.shields.io/badge/AI%20Co--Pilot-Google%20GEMINI-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini">
</p>

---

## 📖 Descrição do Projeto
O **PortfolioHUB** é uma plataforma centralizada para exibição e gerenciamento de portfólios digitais, projetada para integrar-se de forma nativa ao GitHub e ao Google Workspace. 

A sua implantação segue princípios rigorosos de segurança avançada, governança de usuários e colaboração eficiente, contando com o apoio contínuo da inteligência artificial **Google GEMINI** como guia técnico, validador de conformidades e boas práticas de Engenharia de Software.

---

## 🎯 Objetivos Estratégicos

* **Centralização Eficiente:** Unificar projetos e portfólios digitais em um ecossistema único e intuitivo.
* **Segurança Baseada em Dados:** Garantir a total rastreabilidade e blindagem de dados sensíveis.
* **Cultura DevOps:** Integrar práticas modernas de CI/CD (Integração e Entrega Contínuas) e governança de código limpo.
* **Colaboração Ágil:** Promover um ambiente dinâmico e integrado para desenvolvedores e usuários finais.

---

## 🗂️ Estrutura e Fases de Implantação

O cronograma de desenvolvimento e governança do ecossistema está dividido estruturalmente em quatro grandes fases:

| Fase | Descrição Técnica | Status |
| :--- | :--- | :---: |
| **1. Setup & Infra** | Criação da organização dedicada (`portfoliohub-labs`) e repositórios críticos (`core` e `infrastructure`). | 🟩 Concluído |
| **2. Integração** | Implementação de GitHub Apps para autenticação segura via OAuth, eliminando tokens pessoais. | 🟩 Concluído |
| **3. Governança & RBAC** | Definição de níveis de acesso baseados em funções e fluxos de trabalho estruturados. | 🟨 Atualizando |
| **4. Homologação & Go-Live** | Auditoria OWASP, testes de pipeline e deploy com monitoramento ativo. | 🟦 Planejado |

---

## 🔐 Pilares de Segurança & Controle de Acesso

O projeto foi desenhado sob a mentalidade *Security by Design*, aplicando camadas críticas para proteção da aplicação:

### 🌐 Controle de Acesso & Fluxo (GitFlow)
* **RBAC (Níveis de Acesso):** Controle baseado em funções dividido estritamente entre `Admin`, `Developer` e `End-User`.
* **Princípio do Privilégio Mínimo:** Nenhuma chave ou integração possui mais permissões do que o estritamente necessário para rodar.
* **Proteção de Branches:** Branches principais protegidas, exigindo autenticação multifator (**MFA**) obrigatória e revisão por pares por meio de *Pull Requests*.

### 🛡️ Segurança do Código & CI/CD
* **GitHub Actions Automatizado:** Pipelines de testes unitários integrados a cada commit.
* **SAST (CodeQL):** Varredura estática contínua à procura de vulnerabilidades no código antes do deploy.
* **Dependabot & Secret Scanning:** Varredura ativa contra vazamento de credenciais/segredos e monitoramento de bibliotecas desatualizadas.
* **Conformidade OWASP Top 10:** Arquitetura blindada contra as principais ameaças web do mercado.

---

## 🤝 Colaboração e IA Co-Pilot

A governança deste repositório incentiva as melhores práticas do ecossistema open-source e corporativo:
* **Desenvolvimento Guiado por IA:** Uso estratégico do **Google GEMINI** para validação de código limpo, arquitetura de software e conformidade de segurança.
* **Padrões de Comunicação:** Fluxo de trabalho documentado (`README.md`, `CONTRIBUTING.md`) focado em transparência e revisões minuciosas antes de mesclar códigos à branch de produção.

---

## 📊 Resultados Esperados

1. Uma plataforma robusta, elástica e escalável para gerenciamento de identidades visuais de tecnologia.
2. Integração transparente, fluida e automatizada com a API do GitHub e Google Workspace.
3. Selo de segurança reforçado em conformidade com padrões internacionais de governança de TI.
4. Alta produtividade e colaboração fluida entre equipes multidisciplinares.

---

## 👨‍💻 Autor

🚀 Desenvolvido e documentado por **Joabe** – Graduando em Engenharia de Software no UniCEUB.

* **GitHub:** [JeiJota](https://github.com/JeiJota)
* **E-mail Institucional:** Joabe.hm@sempreceub.com
-- Integração transparente com GitHub e Google Workspace.

-- Segurança reforçada e conformidade com padrões internacionais.

-- Colaboração eficiente entre equipes multidisciplinares.

