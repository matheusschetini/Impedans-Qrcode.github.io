const button = document.querySelector('button');
const commentaryBubble = document.querySelector('.commentary-bubble');

button.addEventListener('click', function() {
  commentaryBubble.classList.toggle('hidden');
});
