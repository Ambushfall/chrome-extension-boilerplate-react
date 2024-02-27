export const printLine = (line, alert = false) => {
  alert ? alert('===> FROM THE PRINT MODULE:', line) : console.log('===> FROM THE PRINT MODULE:', line);
};


export const alertLine = (line) => alert(line)