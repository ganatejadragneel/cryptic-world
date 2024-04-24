document.addEventListener('DOMContentLoaded', function() {
    var textboxContainer = document.getElementById('textboxContainer');
    var showButton = document.getElementById('showButton');
  
    showButton.addEventListener('click', function() {
      if (!showButton.classList.contains('disabled')) {
        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.id = 'textbox';
        textbox.placeholder = 'level2-ctf.netlify.app';
        textboxContainer.appendChild(textbox);
      }
    });
  });