import React from 'react';
import { VerbProvider } from '../contexts/VerbContext';
import { VerbTemplate } from '../templates/verb';

const New = ({ navigation, route }) => {
  const { selection } = route.params;

  return <VerbProvider><VerbTemplate /></VerbProvider>
}

export { New }
