export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-Br', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};
