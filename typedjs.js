

var originalMessage = document.querySelector('#greeting').innerHTML;
var typedElement = document.querySelector('#greeting');
var originalLength = typedElement.innerHTML.length;
var i = originalLength - 1;
var newMessage = "How can I help you?";
var typeSpeed = 200;


//start with 'hello' and delete down from there to 'h'
var deleteInterval = setInterval(function() {
  typedElement.innerHTML = originalMessage.substring(0,i);
  i--;
  if (i <= 0) {
    clearInterval(deleteInterval);
  }
}, typeSpeed);

setTimeout(function() {
  typedIndex = newMessage.length;

  var addInterval = setInterval(function() {
    // var originalMessage = document.querySelector('#greeting').innerHTML;
    typedElement.innerHTML = newMessage.substring(0,i);
    i++;
    if (i > newMessage.length ) {
      clearInterval(addInterval);
    }
  }, typeSpeed);
}, originalLength * typeSpeed);