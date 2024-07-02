const debug = false;

export const printLine = (line, alert = false) => {
  alert ? alertLine('===> FROM THE PRINT MODULE:', line) : console.log('===> FROM THE PRINT MODULE:', line);
};


export const alertLine = (line) => debug ? alert(JSON.stringify(line, null, 2)) : console.log(JSON.stringify(line, null, 2))