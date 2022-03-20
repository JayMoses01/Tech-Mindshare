const loginUser = async (event) => {
    event.preventDefault();
  
    // JRM: Gathers the user's login credentials.
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // JRM: If there are email and password values in the respective input fields, a POST request is sent with this information.
    if (email && password) {

      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
  
  const signupUser = async (event) => {
    event.preventDefault();
  
    // JRM: Gathers the user's login credentials to be created.
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // JRM: If values are present for the name, email, and password fields, a POST request is sent to save these credentials.
    if (name && email && password) {
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
  
  // JRM: Event listener for the login button.
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginUser);
  
  // JRM: Event listener for the signup button.
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupUser);
  