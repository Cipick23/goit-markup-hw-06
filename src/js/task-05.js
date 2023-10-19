const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const newName = nameInput.value || 'Anonymous';
  nameOutput.textContent = newName;
});