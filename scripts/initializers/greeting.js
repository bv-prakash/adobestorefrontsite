// scripts/initializers/greeting.js
import { initialize } from '@dropins/greeting/index.js';

export default async function initializeGreeting() {
  await initialize();
}