function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    // Mesajı maxLength kadar kes ve sonuna üç nokta ekle
    return message.slice(0, maxLength) + "...";
  }
}

// Testler
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."