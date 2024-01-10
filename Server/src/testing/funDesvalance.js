const funDesvalance = (expresion) =>{
   const arrExpre = expresion.split("");
   for (let i = 0; i < arrExpre.length; i++) {
      if((arrExpre[i] === "{" && arrExpre[i]=== "}") 
        && (arrExpre[i] === "[" && arrExpre[i] === "]") && (arrExpre[i] === "(" && arrExpre[i] === ")")
      ){
        return true;
      }
    }
    return false;
}

module.exports = funDesvalance;