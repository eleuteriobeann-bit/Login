// Login function to handle form submission
function login(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');
    
    // Clear previous message
    messageElement.textContent = '';
    messageElement.style.color = '#d969e8';
    
    // Validation
    if (!email) {
        messageElement.textContent = '❌ Please enter an email';
        messageElement.style.color = '#ff6b6b';
        return;
    }
    
    if (!isValidEmail(email)) {
        messageElement.textContent = '❌ Please enter a valid email';
        messageElement.style.color = '#ff6b6b';
        return;
    }
    
    if (password.length < 6) {
        messageElement.textContent = '❌ Password must be at least 6 characters';
        messageElement.style.color = '#ff6b6b';
        return;
    }
    
    // If all validations pass
    messageElement.textContent = '✓ Login successful! Welcome back.';
    messageElement.style.color = '#69ff8c';
    
    console.log('Login Successful:', { email, password });
    
    // Here you would typically send the data to a server
    // Example: sendLoginData(email, password);
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
