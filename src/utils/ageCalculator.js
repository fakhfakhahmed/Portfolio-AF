/**
 * Calculate age based on birth date
 * @param {string} birthDate - Birth date in format 'YYYY-MM-DD'
 * @returns {number} Current age
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  // If birthday hasn't occurred this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Get Ahmed's current age
 * Birth date: August 7, 1999
 * @returns {number} Ahmed's current age
 */
export const getAhmedAge = () => {
  return calculateAge('1999-08-07');
};
