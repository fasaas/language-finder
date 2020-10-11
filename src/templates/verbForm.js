const tenses = ['present', 'past', 'future'];
const subjects = ['Я', 'Ты', 'Он', 'Она', 'Оно', 'Мы', 'Вы', 'Они'];

const buildEmptyVerbForm = () => {
  const form = { title: '', infinitive: { origin: '', translated: '' }, tenses: {} }

  tenses.forEach((tense) => {
    form.tenses[tense] = subjects.map((subject) => ({
      label: subject,
      text: '',
      keys: { tense, subject }
    }))
  })

  return form;
}

export { buildEmptyVerbForm }
