import Greeting from '../components/Greeting.js';
import { createGreetingStore } from '../store/greetingStore.js';

export default function GreetingContainer(element, options) {
  const { placeholder = 'Enter your name', defaultMessage = 'Hello Shopper 👋' } = options;
  const store = createGreetingStore();

  element.innerHTML = Greeting({ placeholder, defaultMessage });

  const input = element.querySelector('.greeting-input');

  const message = element.querySelector('.greeting-message');

  input.addEventListener('input', (event) => { store.setName(event.target.value.trim()); });

  store.subscribe(({ name }) => { message.textContent = name ? `Hello ${name} 👋` : defaultMessage; });
}
