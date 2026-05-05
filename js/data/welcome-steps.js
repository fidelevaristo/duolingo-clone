export const welcomeSteps = [
  {
    id: "discovery",
    question: "Come ci hai conosciuto?",
    layout: "two-columns",
    options: [
      { id: "google", label: "Ricerca su Google", icon: "google-icon.svg" },
      { id: "tiktok", label: "TikTok", icon: "tiktok-icon.svg" },
      { id: "tv", label: "TV", icon: "tv-icon.svg" },
      {
        id: "facebook-instagram",
        label: "Facebook/Instagram",
        icon: "facebook-instagram-icon.svg",
      },
      { id: "youtube", label: "YouTube", icon: "youtube-icon.svg" },
      {
        id: "friends-family",
        label: "Amici e famiglia",
        icon: "amici-famiglia-icon.svg",
      },
      {
        id: "news-blog",
        label: "Notizie/articoli/blog",
        icon: "notizie-articoli-blog-icon.svg",
      },
      { id: "other", label: "Altro", icon: "altro-icon.svg" },
    ],
  },

  {
    id: "goal",
    question: "Perché vuoi imparare il portoghese?",
    layout: "two-columns",
    options: [
      {
        id: "travel",
        label: "Prepararmi per un viaggio",
        icon: "prepararmi-viaggio-icon.svg",
      },
      {
        id: "education",
        label: "Migliorare la mia educazione",
        icon: "migliorare-educazione-icon.svg",
      },
      {
        id: "career",
        label: "Nuove possibilità di carriera",
        icon: "nuove-possibilita-icon.svg",
      },
      { id: "brain", label: "Esercitare la mente", icon: "brain-icon.svg" },
      { id: "fun", label: "Divertimento", icon: "divertimento-icon.svg" },
      {
        id: "people",
        label: "Conoscere altre persone",
        icon: "amici-famiglia-icon.svg",
      },
      { id: "other", label: "Altro", icon: "altro-icon.svg" },
    ],
  },

  {
    id: "level",
    question: "Come te la cavi in portoghese?",
    layout: "level-list",
    options: [
      {
        id: "starter",
        label: "Ho appena iniziato a studiare portoghese",
        icon: "appena-iniziato-icon.svg",
      },
      {
        id: "words",
        label: "Conosco alcune parole di uso comune",
        icon: "conosco-parole-icon.svg",
      },
      {
        id: "basic",
        label: "Riesco a sostenere conversazioni di base",
        icon: "conversazioni-basi-icon.svg",
      },
      {
        id: "topics",
        label: "Riesco a parlare di vari argomenti",
        icon: "vari-argomenti-icon.svg",
      },
      {
        id: "advanced",
        label:
          "Riesco a parlare in dettaglio della maggior parte degli argomenti",
        icon: "parlare-dettaglio-icon.svg",
      },
    ],
  },

  {
    id: "benefits",
    question: "Ecco quello che puoi ottenere!",
    layout: "benefits",
    requiresSelection: false,
    options: [
      {
        id: "confidence",
        label: "Parla con sicurezza",
        description:
          "Esercizi per allenarti a parlare e ascoltare senza stress",
        icon: "parla-sicurezza-icon.svg",
      },
      {
        id: "vocabulary",
        label: "Espandi il tuo vocabolario",
        description: "Parole comuni e frasi utili",
        icon: "espandi-vocabulario-icon.svg",
      },
      {
        id: "habit",
        label: "Trasforma lo studio in una sana abitudine",
        description: "Promemoria intelligenti, sfide divertenti e molto altro",
        icon: "sana-abitudine-icon.svg",
      },
    ],
  },

  {
    id: "daily-goal",
    question: "Qual è il tuo obiettivo giornaliero?",
    layout: "daily-goal",
    options: [
      { id: "5", label: "5 min / giorno", meta: "Rilassato" },
      { id: "10", label: "10 min / giorno", meta: "Normale" },
      { id: "15", label: "15 min / giorno", meta: "Serio" },
      { id: "20", label: "20 min / giorno", meta: "Intenso" },
    ],
  },

  {
    id: "path",
    question: "Ora vediamo da dove iniziare!",
    layout: "path",
    options: [
      {
        id: "basics",
        label: "Inizia dalle basi",
        description: "Completa la lezione più facile del corso di portoghese",
        icon: "inizia-dalle-basi-icon.svg",
      },
      {
        id: "placement",
        label: "Trova il mio livello",
        description: "Lascia che Duo ti suggerisca da dove iniziare a imparare",
        icon: "trova-livello-icon.svg",
      },
    ],
  },
];