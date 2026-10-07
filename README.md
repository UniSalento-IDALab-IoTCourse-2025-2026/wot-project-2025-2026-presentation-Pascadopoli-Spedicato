# Triage IoT - Presentation

GitHub Page ufficiale del progetto **Triage IoT**, realizzato da Emilio Pascadopoli
e Daniel Spedicato per il corso Internet of Things 2025/2026 dell'Universita del
Salento.

La pagina e' statica e non richiede build, dipendenze o variabili d'ambiente.

## Anteprima locale

Aprire `index.html` nel browser oppure avviare un server HTTP dalla cartella:

```bash
python -m http.server 8000
```

La pagina sara' disponibile su `http://localhost:8000`.

## Pubblicazione GitHub Pages

Il workflow `.github/workflows/pages.yml` pubblica automaticamente il sito a ogni
push sul branch `main`. La prima volta, nel repository GitHub aprire
**Settings > Pages** e scegliere:

- Source: `GitHub Actions`

Il sito verra' pubblicato all'indirizzo mostrato dalla sezione Pages e dal job
`Deploy GitHub Pages` nella scheda Actions.

## Repository principale

[wot-project-2025-2026-project-Emilio-Daniel](https://github.com/UniSalento-IDALab-IoTCourse-2025-2026/wot-project-2025-2026-project-Emilio-Daniel)
