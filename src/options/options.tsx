import React from 'react';
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'

const test = (
  <section>
    <h1>BeeYond Options</h1>
    <img src="lc-beyhorm.png" alt="Be Yhorm" />
  </section>
)

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(test)