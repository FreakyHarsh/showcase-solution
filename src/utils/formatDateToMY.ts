export const formatDateToMY = (date: Date) => date.toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric'
});
