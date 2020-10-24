import React from 'react';
import { NewNoteProvider } from '../contexts/NewNoteContext';
import { NewNoteScreen } from './NewNoteScreen';

export const NewNoteScreenWrapper = () => (
  <NewNoteProvider>
    <NewNoteScreen />
  </NewNoteProvider>
)
