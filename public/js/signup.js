const signupUser = async (event) => {
    event.preventDefault();
  
    // JRM: Gathers the user's login credentials to be created.
    const name = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
  
    // JRM: If values are present for the name, email, and password fields, a POST request is sent to save these credentials.
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // JRM: If the POST is successful, the user is redirected to their dashboard page. Otherwise, they receive an error alert.
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

// JRM: Event listener for the signup button.
document
    .getElementById('signup-button')
    .addEventListener('submit', signupUser);
  