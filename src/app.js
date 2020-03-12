/* eslint-disable no-unused-vars */

import React from 'react';
import Footer from './components/footer/index.js';

// State Only
// import ToDo from './components/todo/todo.js';

// API Connected (Live Data)
import ToDo from './components/todo/todo-connected.js';

export default function App (){
  return (
    <>
      <ToDo />
      <Footer />
    </>
  );
}