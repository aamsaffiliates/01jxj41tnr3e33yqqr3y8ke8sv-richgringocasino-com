// RichGringo Casino - Button Redirect Script
// Redirects all button clicks to /play URL

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle button clicks
    function handleButtonClick(event) {
        event.preventDefault(); // Prevent default button behavior
        window.location.href = 'https://richgringocasino.com/play';
    }

    // Get all buttons on the page
    const buttons = document.querySelectorAll('button');
    
    // Add click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });

    // Also handle any buttons that might be added dynamically later
    // Using event delegation on the document body
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            handleButtonClick(event);
        }
    });

    // Optional: Add visual feedback when buttons are clicked
    buttons.forEach(function(button) {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('Button redirect script loaded successfully. All buttons will redirect to /play');
});