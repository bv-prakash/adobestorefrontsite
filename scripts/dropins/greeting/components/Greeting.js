export default function Greeting({ placeholder, defaultMessage }) {
  return `
        <div class="greeting-wrapper">
            <input class="greeting-input" type="text" placeholder="${placeholder}" />
            <h2 class="greeting-message"> ${defaultMessage} </h2>
        </div>
    `;
}
