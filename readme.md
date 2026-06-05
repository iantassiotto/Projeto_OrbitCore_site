# 🛸 OrbitCore — Site Oficial

> Site oficial da missão OrbitCore de exploração do sistema TRAPPIST-1.  
> Desenvolvido para a **Global Solution 2026 — FIAP** pela Equipe PRISMA.

🔗 **[Acessar o site](https://iantassiotto.github.io/Projeto_OrbitCore_site/index.html)**

---

## 📡 Sobre o Site

O site da OrbitCore funciona como o **portal oficial da missão** — semelhante
aos sites de missões da NASA. Ele apresenta ao público o que é a sonda,
como ela funciona, quais são seus componentes, qual é o objetivo científico
da missão e os resultados da análise dos 7 planetas do sistema solar TRAPPIST-1.

---

## 📄 Páginas

### `index.html` — Página Inicial
Apresentação geral da missão OrbitCore: conceito da sonda veleiro solar,
objetivos científicos, destaque para o sistema TRAPPIST-1 e chamada
para as demais seções do site.

### `pages/emulador.html` — Emulador
Seção interativa com três demonstrações:
- **Visualização 3D** do sistema TRAPPIST-1 via NASA Eyes on Exoplanets
- **Circuito Arduino** em tempo real — demonstração do modelo teórico
  da sonda OrbitCore funcionando

### `pages/trappist-1.html` — Sistema TRAPPIST-1
Catálogo completo dos 7 exoplanetas com:
- Especificações de cada planeta (raio, massa, gravidade, temperatura)
- ESI — Índice de Similaridade com a Terra
- Composição atmosférica (gases detectados ou estimados)
- Período orbital 
- Distância da estrela
- Comparação direta de cada planeta com a Terra
- Indicação do planeta mais habitável

### `pages/missao.html` — A Missão
Descrição detalhada da missão:
- Componentes da sonda (vela solar, RFID, Arduino, sensores)
- Como a sonda funciona na prática
- Contexto científico: fórmulas matemáticas 
- Códigos utilizados no projeto (Arduino)

### `pages/prisma.html` — Equipe PRISMA
Apresentação dos integrantes da equipe, funções e contribuições
de cada membro no projeto.

### `pages/glossario.html` — Glossário
Definições de todos os termos técnicos e científicos presentes no site:
exoplanetas, ESI, RFID, tidally locked, magnitude, UA, entre outros.

---

## 🗂️ Estrutura do Repositório

```
ORBITCORE_SITE/
├── index.html
├── readme.md
└── src/
    ├── assets/
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
    ├── css/
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
    │   ├── emulador.css        # Terminal e emulador
    │   ├── equipe.css          # Página da equipe
    │   └── responsivo.css      # Media queries
    ├── js/
    │   └── script.js           # Interatividade, quiz e emulador
    └── pages/
        ├── missao.html
        ├── trappist-1.html
        ├── emulador.html
        ├── glossario.html
        └── prisma.html
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura de todas as páginas |
| CSS3 + Flexbox | Layout, responsividade e animações |
| JavaScript (ES6+) | Interatividade, emulador e lógica de comparação |
| NASA Eyes on Exoplanets | Visualização 3D do sistema TRAPPIST-1 |
| Protótipo Wokwi | Visualização do circuito

---

## 🌍 Sistema TRAPPIST-1 — Resumo

| Planeta | ESI | Atmosfera | Classe |
|---------|-----|-----------|--------|
| TRAPPIST-1b | 0.30 | Inexistente | Hostil |
| TRAPPIST-1c | 0.57 | Muito tênue | Hostil |
| TRAPPIST-1d | 0.71 | CO₂, H₂O, N₂ | Possível |
| TRAPPIST-1e | 0.85 | N₂, CO₂, H₂O, CH₄ | **Habitável** |
| TRAPPIST-1f | 0.67 | CO₂, H₂O, N₂ | Possível |
| TRAPPIST-1g | 0.58 | CO₂, CH₄, N₂ | Possível |
| TRAPPIST-1h | 0.34 | Inexistente | Hostil |

ESI = Earth Similarity Index — Planetary Habitability Laboratory (PHL/UPR).

---

## 👥 Equipe PRISMA

| Nome | RM | Responsabilidade |
|------|----|-----------------|
| Ian | 570812 | Tech Lead |
| João Gabriel | 573685 | Engenheiro de Software & Storyteller |
| Hyan Hideo | 571005 | Cientista & Front-End |
| Elizeu | 569433 | Designer |

---

## 📋 Disciplinas Atendidas

| Disciplina | Entregável |
|---|---|
| Front-End Design | HTML + CSS (6 seções, Flexbox, layout responsivo) |
| Web Development | JavaScript + 15 commits 

---

## 📚 Referências Científicas

- NASA Exoplanet Archive — https://exoplanetarchive.ipac.caltech.edu/
- NASA Eyes on Exoplanets — https://eyes.nasa.gov/apps/exo
- JWST TRAPPIST-1 Results (2023) — Nature Astronomy
- Nature of TRAPPIST-1 - https://www.aanda.org/articles/aa/full_html/2018/05/aa32233-17/aa32233-17.html
- The Planetary Science Journal - https://iopscience.iop.org/article/10.3847/PSJ/abd022

---

## 📄 Licença

Projeto acadêmico — Global Solution 2026 — FIAP.  
Todos os direitos reservados à Equipe PRISMA.