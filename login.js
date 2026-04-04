document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('username').value;
    
    // Save the name so the Dashboard can use it
    localStorage.setItem('userDisplayName', name);
    
    // Redirect to the main dashboard
    window.location.href = 'dashboard.html';
});