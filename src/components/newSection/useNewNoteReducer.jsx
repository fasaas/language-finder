import { useReducer } from "react";

let sectionCount = 0;

const createSection = (type) => {
  sectionCount++;
  return {
    "Sentence": { type: "Sentence", id: sectionCount, content: {} },
    "Adjective": { type: "Adjective", id: sectionCount, content: {} },
    "Verb": { type: "Verb", id: sectionCount, content: {} }
  }[type];
}

const newNoteReducer = (state, dispatch) => {
  const { action } = dispatch;

  switch (action) {
    case "set-title":
      const { title } = dispatch;
      return { ...state, title };
    case "new-section": {
      const { type } = dispatch;
      const { sections } = state;
      sections.push(createSection(type))
      return { ...state, sections }
    }
  }
}

const initialState = {
  title: '',
  sections: []
}

export const useNewNoteReducer = () => {
  const [state, dispatch] = useReducer(newNoteReducer, initialState);

  return { state, dispatch };
}