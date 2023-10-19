const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenim reîncărcarea paginii la trimiterea formularului

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  // Verificăm dacă toate câmpurile sunt completate
  if (!email || !password) {
    alert('Toate câmpurile trebuie completate!');
    return;
  }

  // Colectăm valorile câmpurilor într-un obiect
  const formData = {
    email,
    password
  };

  // Afișăm obiectul cu datele introduse în consolă
  console.log('Datele introduse:', formData);

  // Resetăm valorile câmpurilor formularului
  this.reset();
});

