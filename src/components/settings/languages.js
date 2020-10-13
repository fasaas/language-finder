const languages = [];
const addLanguage = (title, locale) => {
  languages.push({ title, locale })
}

addLanguage('Русский', 'ru-RU');
addLanguage('Castellano (España)', 'es-ES');

const getLanguagesWithout = (locale) => languages.filter((language) => language.locale !== locale)
export { getLanguagesWithout }
