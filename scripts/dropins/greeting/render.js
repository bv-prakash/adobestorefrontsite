import GreetingContainer from './containers/GreetingContainer.js';

export const render = {
  mount(container, options) {
    GreetingContainer(container, options);
  },
};
