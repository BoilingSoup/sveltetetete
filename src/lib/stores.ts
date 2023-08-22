import { spring, tweened } from "svelte/motion";
import { readable } from "svelte/store";

function createCounter() {
  const { subscribe, set, update } = tweened(0);

  return {
    subscribe,
    increment() {
      update((n) => (n += 10));
    },
    decrement() {
      update((n) => (n -= 5));
    },
    reset() {
      set(0);
    },
  };
}
export const counter = createCounter();

export const size = readable(20, function start(set) {
  const min = 20;
  const max = 60;
  let curr = min;

  const sizeSpring = spring(min);
  const unsubscribe = sizeSpring.subscribe((n) => {
    set(n);
  });

  const interval = setInterval(() => {
    if (curr === min) {
      sizeSpring.set(max);
      curr = max;
    } else {
      sizeSpring.set(min);
      curr = min;
    }
  }, 500);

  return function stop() {
    unsubscribe();
    clearInterval(interval);
  };
});
