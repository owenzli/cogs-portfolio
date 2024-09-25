export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const padIndex = (index, total) =>
  String(index).padStart(Math.max(2, String(total).length), "0");

export const getClickOffset = (event, ref) => {
  const rect = ref.current.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

export const createSignal = (name, fn) => {
  window[name] = fn;
};

export const callSignal = (name, ...args) => {
  if (name in window && typeof window[name] === "function") {
    window[name](...args);
  }
};
