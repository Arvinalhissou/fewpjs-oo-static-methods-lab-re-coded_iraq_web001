class Formatter {
  static capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize (str){
  return str.replace(/[^A-Za-z0-9-" "']+/g, '')
}
  static titleize(str){
   const exceptions = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at','by','from']

    let myStr = str.split(" ");
    let word = [];

    myStr.map(function(word){
      if(exceptions.includes(word) === false){
        word.push(this.capitalize(word));
      } else {
        word.push(word);
      }
    })
    return this.capitalize(word.join(" "));
  }
}