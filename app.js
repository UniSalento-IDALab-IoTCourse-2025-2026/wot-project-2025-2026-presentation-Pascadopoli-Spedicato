const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
  }
}

function closeMenu() {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Apri menu");
}

menuButton.addEventListener("click", () => {
  const opening = !nav.classList.contains("open");
  nav.classList.toggle("open", opening);
  document.body.classList.toggle("menu-open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.setAttribute("aria-label", opening ? "Chiudi menu" : "Apri menu");
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const demoContent = [
  {
    icon: "bluetooth-searching",
    label: "FASE 01",
    title: "Segnali raccolti in casa",
    text: "Il foreground service Android individua i beacon e inoltra i campioni BLE; Google Health rende disponibili i parametri del wearable.",
    status: "Flusso monitorato",
  },
  {
    icon: "cpu",
    label: "FASE 02",
    title: "Elaborazione vicino al paziente",
    text: "Il Raspberry Pi aggrega i segnali in finestre da quattro minuti, verifica la qualità e combina i modelli generici con quello personale.",
    status: "Inferenza completata",
  },
  {
    icon: "send",
    label: "FASE 03",
    title: "Consegna resiliente al backend",
    text: "Decisioni e finestre vengono pubblicate via MQTT su TLS. Se la rete manca, la coda locale conserva i messaggi e li ritenta.",
    status: "Trasporto cifrato",
  },
  {
    icon: "clipboard-check",
    label: "FASE 04",
    title: "Il ciclo si chiude con il paziente",
    text: "Il medico legge il contesto, assegna un’attività e riceve in dashboard risposte, durata e dispositivo usato dal paziente.",
    status: "Risultato ricevuto",
  },
];

const stage = document.querySelector("[data-demo-stage]");
document.querySelectorAll("[data-demo-step]").forEach((item) => {
  item.querySelector("button").addEventListener("click", () => {
    const index = Number(item.dataset.demoStep);
    const content = demoContent[index];
    document.querySelectorAll("[data-demo-step]").forEach((step) => step.classList.toggle("active", step === item));
    stage.innerHTML = `
      <div class="stage-icon"><i data-lucide="${content.icon}"></i></div>
      <p class="stage-label">${content.label}</p>
      <h3>${content.title}</h3>
      <p>${content.text}</p>
      <div class="stage-status"><span></span> ${content.status}</div>
    `;
    renderIcons();
  });
});

renderIcons();
