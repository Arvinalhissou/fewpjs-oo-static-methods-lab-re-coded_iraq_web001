class Formatter {
  static capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize (str){
  return str.replace(/[^A-Za-z0-9\-\' ]+/g, '')
}
  static titleize(str){
   const exceptions = ["of", "the", "a", "an", "and", "but", "for", "at", "by", "from"]

    return str.split(" ").map((word, index)=> { 
      if (index !== 0 && exceptions.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
      this.capitalize(word).join(" ")

  }
  
  )}
}