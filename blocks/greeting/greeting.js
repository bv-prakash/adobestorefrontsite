/*  Original Vanilla JS implementation */
/*
export default async function decorate(block) {
    const firstRow = block.children[0];

  const placeholder = firstRow.textContent.trim()
    || 'Enter your name';

    if (block.children.length > 1) {
        console.warn(
        'Greeting block expects only one row.'
        );
    }

   console.log('block data', block);

  block.innerHTML = `
    <div class="greeting-wrapper">

      <input
        type="text"
        class="greeting-input"
        placeholder="${placeholder}"
      />

      <h2 class="greeting-message">

        Hello Shopper 👋

      </h2>

    </div>
   `;

  const input = block.querySelector('.greeting-input');

  const message = block.querySelector('.greeting-message');

  input.addEventListener('input', (event) => {
    const name = event.target.value.trim();

    message.textContent = name

      ? `Hello ${name} 👋`

      : 'Hello Shopper 👋';
  });
}

*/

/* Dropin concept */

/*
import { render } from '../../scripts/dropins/greeting/index.js';

export default async function decorate(block) {
  const placeholder = block.children[0]?.textContent.trim() || 'Enter your name';

  block.innerHTML = '';

  render.mount(block, { placeholder, defaultMessage: 'Hello Shopper 👋' });
} */

/*  Imported Dropin */

// eslint-disable-next-line import/no-unresolved
import { render as renderGreeting } from '@dropins/greeting/index.js';

export default async function decorate(block) {
  const firstRow = block.children[0];
  const placeholder = firstRow?.textContent.trim() || 'Enter your name';

  if (block.children.length > 1) {
    console.warn('Greeting block expects only one row.');
  }

  const mountPoint = document.createElement('div');
  block.replaceChildren(mountPoint);

  await renderGreeting(mountPoint, { placeholder, defaultMessage: 'Hello Shopper 👋' });
}
