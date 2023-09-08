// Function to calculate age
function calculateAge(birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  
  // Replace 'YYYY-MM-DD' with your birthdate in the format 'YYYY-MM-DD'
  const birthdate = '2001-12-05';
  
  // Calculate age
  const age = calculateAge(birthdate);
  
  // Create a <p> element
  const pElement = document.createElement('p');
  
  // Set the text content of the <p> element
  pElement.textContent = `Your age is: ${age} years`;
  
  // Append the <p> element to the document's body (you can choose another location)
  document.body.appendChild(pElement);
  