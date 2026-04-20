function checkForSpam(message) {
  // Önce tüm mesajı küçük harfe çeviriyoruz ki "SPAM" veya "sAlE" kaçmasın
  const lowerCaseMessage = message.toLowerCase();

  // Yasaklı kelimeleri kontrol ediyoruz
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

// Testler
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true