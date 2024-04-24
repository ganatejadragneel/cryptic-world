document.addEventListener('DOMContentLoaded', function() {
  var textboxContainer = document.getElementById('textboxContainer');
  var showButton = document.getElementById('showButton');

  showButton.addEventListener('click', function() {
      if (!showButton.classList.contains('disabled')) {
          fetch('api.php')
              .then(response => response.json())
              .then(data => {
                  var textbox = document.createElement('input');
                  textbox.type = 'text';
                  textbox.id = 'textbox';
                  textbox.value = data;
                  textboxContainer.appendChild(textbox);
              });
      }
  });
});