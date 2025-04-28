export function formatDate(dateString) {
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }
  
  // Format the date
  const options = { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('en-US', options);
} 