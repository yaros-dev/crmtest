import React from 'react';
import { Contact } from '../components/contact/contact';
import { contactScreenData } from '../mock/contact-screen';

export function ContactPage() {
  return (
    <React.Fragment>
      <Contact {...contactScreenData} />
    </React.Fragment>
  );
}
