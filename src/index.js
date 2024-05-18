/** GENERAL FEEDBACK:
 *
 */
// const form = document.querySelector('#new-user-form');
// form.addEventListener('submit', (e) => {e.preventDefault()})
//I moved the preventDefault to Handler bc if not the things are Data would always be empty for even when changes happen, realized after span part

const handleSubmit = (e) => {
  e.preventDefault()
  const form = document.querySelector('#new-user-form');
  const formData = new FormData(form);
  document.querySelector('#results-username').textContent = formData.get("username");
  document.querySelector('#results-coding-level').textContent = formData.get("codingLevel");
  document.querySelector('#results-location').textContent = formData.get("location");
  document.querySelector('#results-did-like-assignment').textContent = (formData.get("didLikeAssignment") === "on") ? 'Yes' : 'No';
  console.log(Object.fromEntries(formData))
  console.log(formData.get("location"))
  form.reset();
};

// handleSubmit();
const form = document.querySelector('#new-user-form');
form.addEventListener('submit', handleSubmit)