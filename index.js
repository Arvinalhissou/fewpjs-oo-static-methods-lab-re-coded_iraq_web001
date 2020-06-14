class Formatter {
  static capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize (str){
   return str.replace(/[^A-Za-z0-9-']+/g, '');
}
  static titleize(str){
   const exemptions = ["of", "the", "a", "an", "and", "but", "for", "at", "by", "from"]

    return string.split(" ").map(function(word, index) { 
      if (index !== 0 && exemptions.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    return finalStr.join(' ')
  }
  
  
}