import React from 'react';
import { Title, Wrapper } from './App.styled';
import { ContactList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};