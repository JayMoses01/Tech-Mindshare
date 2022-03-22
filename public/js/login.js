const loginUser = async (event) => {
    event.preventDefault();
  
    // JRM: Gathers the user's login credentials.
    const name = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
  
    // JRM: If there are email and password values in the respective input fields, a POST request is sent with this information.
    if (name && password) {

      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
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
  

// JRM: Event listener for the login button. (FIND AN ACTIVITY WHERE BUTTON CLICKING ACTUALLY DOES SOMETHING--NOT THE MINI PROJECT. I COULD TRY CHANGING IT BACK TO QUERY SELECTOR.)
const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('submit', loginUser);
