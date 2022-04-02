// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')
var noteEl = document.getElementById('notes-area')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
nameSpan.textContent=document.cookie || "Your Name"

var newNote = localStorage.getItem('notes')
if (newNote) {
  noteEl.textContent = newNote
} else {
  noteEl.textContent = ''
}

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  document.cookie=nameSpan.textContent
  console.log(document.cookie)

  noteEl.textContent = textarea.value
  localStorage.setItem('notes', textarea.value)
  console.log(textarea.value)
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
noteEl.textContent = ' '
localStorage.clear()
  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp