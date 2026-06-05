# 🛸 OrbitCore — Site Oficial

> Central de Controle da missão de exploração do sistema TRAPPIST-1.  
> Projeto desenvolvido para a **Global Solution 2026 — FIAP**.

---

## 📡 Sobre o Projeto

O **OrbitCore** é uma sonda veleiro solar autônoma projetada para explorar
exoplanetas do sistema TRAPPIST-1, localizado a 40 anos-luz da Terra.

Este repositório contém o **site da Central de Controle**, interface visual
que apresenta os dados coletados pela sonda, os 7 planetas do sistema e
o painel de habitabilidade.

---

## 🗂️ Estrutura do Repositório

```
ORBITCORE_SITE/
├── index.html                  # Página inicial
├── readme.md
└── src/
    ├── assets/                 # Imagens e mídias
    │   ├── earth.png
    │   ├── favicon.svg
    │   ├── prisma_logo_cosmica.jpeg
    │   ├── TRAPPIST_1_SUN.webp
    │   ├── TRAPPIST-1b.png
    │   ├── TRAPPIST-1c.png
    │   ├── TRAPPIST-1d.png
    │   ├── TRAPPIST-1e.png
    │   ├── TRAPPIST-1f.png
    │   ├── TRAPPIST-1g.png
    │   └── TRAPPIST-1h.png
    ├── css/                    # Estilos separados por componente
    │   ├── base.css            # Reset e variáveis globais
    │   ├── tipografia.css      # Fontes e textos
    │   ├── estilo.css          # Estilos gerais
    │   ├── navbar.css          # Barra de navegação
    │   ├── hero.css            # Seção principal (hero)
    │   ├── secoes.css          # Seções internas
    │   ├── cards.css           # Cards dos planetas
    │   ├── botoes.css          # Botões e CTAs
    │   ├── animacoes.css       # Animações e transições
    │   ├── timeline.css        # Linha do tempo da missão
    │   ├── missao.css          # Página da missão
    │   ├── trappist-1.css      # Página dos planetas
    │   ├── glossario.css       # Página do glossário
    │   ├── emulador.css        # Terminal emulador
    │   ├── equipe.css          # Página da equipe
    │   └── responsivo.css      # Media queries
    ├── js/
    │   └── script.js           # Lógica e interatividade
    └── pages/                  # Páginas internas
        ├── missao.html         # Sobre a missão OrbitCore
        ├── trappist-1.html     # Catálogo dos 7 planetas
        ├── emulador.html       # Terminal simulado (Serial Monitor)
        ├── glossario.html      # Glossário de termos espaciais
        └── prisma.html         # Equipe PRISMA
```

---

## 🚀 Como Executar

O site é estático — não precisa de instalação.

**Opção 1 — abrir direto:**
```
Abra o arquivo index.html no navegador.
```

**Opção 2 — servidor local (recomendado):**
```bash
# Com Python
python -m http.server 8080

# Com Node.js
npx serve .
```
Acesse `http://localhost:8080` no navegador.

---

## 📄 Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Página inicial — hero, resumo da missão, chamada para ação |
| `pages/missao.html` | Descrição da missão, objetivos e conceito da sonda |
| `pages/trappist-1.html` | Catálogo completo dos 7 planetas com ESI e atmosfera |
| `pages/emulador.html` | Terminal que simula o recebimento de dados da sonda |
| `pages/glossario.html` | Glossário de termos científicos e tecnológicos |
| `pages/prisma.html` | Apresentação da equipe PRISMA |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura de todas as páginas |
| CSS3 + Flexbox | Layout, responsividade e animações |
| JavaScript (ES6+) | Interatividade, quiz e emulador |

---

## 🌍 Sistema TRAPPIST-1

| Planeta | ESI | Classe |
|---------|-----|--------|
| TRAPPIST-1b | 0.30 | Hostil |
| TRAPPIST-1c | 0.57 | Hostil |
| TRAPPIST-1d | 0.71 | Possível |
| TRAPPIST-1e | 0.85 | **Habitável** |
| TRAPPIST-1f | 0.67 | Possível |
| TRAPPIST-1g | 0.58 | Possível |
| TRAPPIST-1h | 0.34 | Hostil |

ESI = Earth Similarity Index — Planetary Habitability Laboratory.

---

## 👥 Equipe PRISMA

| Nome | RM | Responsabilidade |
|------|----|-----------------|
| | | Líder Técnico / Hardware (Edge Computing) |
| | | Software & Python |
| | | Front-End & Web Development |
| | | Ciência & Storytelling |

---

## 📋 Disciplinas Atendidas

| Disciplina | Entregável |
|---|---|
| Front-End Design | HTML + CSS (6 seções, Flexbox, layout responsivo) |
| Web Development | JavaScript + 15 commits + `AI.md` |

---

## 🤖 Uso de Inteligência Artificial

Documentado em [`AI.md`](./AI.md) conforme exigido pela disciplina
de Web Development. Cada uso de IA está registrado com ferramenta,
prompt utilizado e trecho gerado.

---

## 📚 Referências

- NASA Exoplanet Archive — https://exoplanetarchive.ipac.caltech.edu
- JWST TRAPPIST-1 Results (2023) — Nature Astronomy
- Planetary Habitability Laboratory — https://phl.upr.edu
- The Planetary Society / LightSail 2 — https://www.planetary.org

---

## 📄 Licença

Projeto acadêmico — Global Solution 2026 — FIAP.  
Todos os direitos reservados à Equipe PRISMA.