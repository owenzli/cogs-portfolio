export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getClickOffset = (event, ref) => {
  const rect = ref.current.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};
