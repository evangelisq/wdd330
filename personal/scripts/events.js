


document.getElementById("year").textContent = new Date ().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;

 
 // Output the current year in the footer's first paragraph
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  
  // Output the date the document was last modified in the footer's second paragraph
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;