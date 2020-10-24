import { useReducer } from "react";

let sectionsCount = 0;

const createNewSection = (type) => {
  sectionsCount++;

  return {
    'Adjective': { type, id: sectionsCount, state: {} },
    'Sentence': { type, id: sectionsCount, state: { from: '', to: '' } },
    'Verb': { type, id: sectionsCount, state: {} }
  }[type]
}

const reducer = (state, event) => {
  const { action } = event;

  switch (action) {
    case 'set-title': {
      const { title } = event;

      return { ...state, title }
    }
    case 'new-section': {
      const { type } = event;
      const newSection = createNewSection(type);

      return { ...state, sections: state.sections.concat(newSection) }
    }
    case 'set-sentence-from': {
      const { id, from } = event;
      const { sections } = state;
      sections.find((section) => section.id === id).state.from = from;

      return { ...state, sections }
    }
    case 'set-sentence-to': {
      const { id, to } = event;
      const { sections } = state;
      sections.find((section) => section.id === id).state.to = to;

      return { ...state, sections }
    }
    case 'set-adjective-gender': {
      const { id, gender, value } = event;
      const { sections } = state;
      sections.find((section) => section.id === id).state[gender] = value;

      return { ...state, sections }
    }
  }
}

const emptyState = {
  title: '',
  sections: []
}

export const useNewNoteReducer = () => {
  const [state, dispatch] = useReducer(reducer, emptyState);

  return { state, dispatch }
}
