let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };

  form.reset();
});

const saveData = localStorage.getItem(localStorageKey);
if (saveData) {
  const parseData = JSON.parse(saveData);
  formData = parseData;
  if (parseData.email) {
    form.elements.email.value = parseData.email;
  }
  if (parseData.message) {
    form.elements.message.value = parseData.message;
  }
}
