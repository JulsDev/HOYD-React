import React from 'react';
import Hero from './Hero';
import About from './About';
import Competence from './Competence';
import FormContacts from '../FormContacts';
import WorksList from './WorksList';
import Partners from './Partners';

export default function MainContent() {

  return (
    <div className="container">
      <Hero />
      <About />
      <Competence />
      <WorksList />
      <Partners />
      <FormContacts />
    </div>
  )
}