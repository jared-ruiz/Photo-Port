// root component, wrapper component that houses all of the others
// the only way to effect the app, is to go through here
import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life',
    },
    {
      name: 'food',
      description: 'Delicious delicacies',
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    }
  ])

  const [currentCategory, setCategory] = useState(categories[0])

  return (
    <div>
      <Nav categories={categories} setCategory={setCategory} currentCategory={currentCategory} contactSelected={contactSelected} setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  )
}

export default App;
