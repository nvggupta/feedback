document.addEventListener('DOMContentLoaded', () => {
    const emojiOptions = document.querySelectorAll('.emoji-option');
    const submitButton = document.getElementById('submit');
    const feedbackContainer = document.querySelector('.feedback');
    const messageContainer = document.querySelector('.message');
    const selectedFeedback = document.getElementById('selected-feedback');
    
    let selectedEmoji = '';
  
    emojiOptions.forEach(option => {
      option.addEventListener('click', () => {
        emojiOptions.forEach(emoji => emoji.classList.remove('active'));
        option.classList.add('active');
        selectedEmoji = option.querySelector('span').innerText;
      });
    });
  
    submitButton.addEventListener('click', () => {
      if (selectedEmoji) {
        feedbackContainer.style.display = 'none';
        messageContainer.style.display = 'flex';
        selectedFeedback.innerText = selectedEmoji;
      } else {
        alert('Please select an emoji.');
      }
    });
  });
  
