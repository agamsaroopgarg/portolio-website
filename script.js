const languageToggle = document.getElementById('toggle-language');
const elementsToTranslate = {
  'about': { de: 'Über Mich', en: 'About Me' },
  'experience': { de: 'Berufserfahrung', en: 'Experience' },
  'education': { de: 'Bildung', en: 'Education' },
  'erfolge': { de: 'erfolge', en: 'Achievements' },
  'projects': { de: 'Projekte', en: 'Projects' },
  'contact': { de: 'Kontakt', en: 'Contact' },
};

let isGerman = true;

languageToggle.addEventListener('click', () => {
  isGerman = !isGerman;
  languageToggle.textContent = isGerman ? 'Switch to English' : 'Auf Deutsch wechseln';
  Object.keys(elementsToTranslate).forEach(key => {
    document.querySelector(`#${key} h2`).textContent = elementsToTranslate[key][isGerman ? 'de' : 'en'];
  });
});
