// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in with email/password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to dashboard on success
      window.location.href = '../dashboard.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Login failed: ${errorMessage}`);
    });
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  // Create user with email/password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Add user details to Firestore
      return db.collection('users').doc(userCredential.user.uid).set({
        name: name,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      // Redirect to dashboard after successful signup
      window.location.href = '../dashboard.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Signup failed: ${errorMessage}`);
    });
});

// Check auth state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User logged in:', user.email);
  } else {
    // User is signed out
    console.log('User signed out');
  }
});