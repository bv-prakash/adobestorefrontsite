export function createGreetingStore() {
  const state = { name: '' };
  const listeners = [];

  return {
    setName(name) {
      state.name = name;
      listeners.forEach((listener) => listener(state));
    },

    subscribe(listener) {
      listeners.push(listener);
    },
  };
}
