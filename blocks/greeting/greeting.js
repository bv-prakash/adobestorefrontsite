export default async function decorate(block) {
  const placeholder = block.textContent.trim()
    || 'Enter your name';

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
