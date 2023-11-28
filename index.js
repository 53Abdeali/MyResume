// Simulate content loading (you can replace this with your actual loading logic)
window.addEventListener('load', function() {
    // Simulate a delay (e.g., AJAX request) before hiding the loader
    setTimeout(function() {
      document.getElementById('loader-container').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 2000); // Adjust the delay time as needed
  });
  