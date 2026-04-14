# CH4217 Research Methodology Website

This repository contains a complete project website and essay package for:

- Topic: Birbal Sahni and the Architecture of Scientific Sovereignty in India
- Author: Shuvam Banerji Seal (22MS076)
- Course: CH4217 Research Methodology

## Live Structure

- `index.html`: Multi-tab website (Overview, Biography, Timeline, Essay, Sources, Author)
- `styles.css`: Custom visual language and 3D-inspired interaction styling
- `script.js`: Tab switching and 3D tilt behavior
- `assets/images/`: Visual assets used in the site
- `sources/From_Lahore_to_Lucknow.md`: Local manuscript source used in references
- `birbal_sahni_essay.tex`: LaTeX source of the essay
- `birbal_sahni_essay.pdf`: Compiled essay PDF
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow

## Website Notes

- The site includes the full essay text with inline citation key links.
- The essay word count displayed is based on the current LaTeX text body.
- The references tab lists validated sources with working URLs.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## LaTeX Build

To compile the essay locally:

```bash
pdflatex -interaction=nonstopmode -halt-on-error birbal_sahni_essay.tex
pdflatex -interaction=nonstopmode -halt-on-error birbal_sahni_essay.tex
```

## Deployment

Push to `main` and GitHub Actions deploys the site via Pages workflow.
