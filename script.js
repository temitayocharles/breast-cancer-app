document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('biodata-form');
  const logList = document.getElementById('log-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const medicalHistory = form['medical-history'].value;

    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}, Age: ${age}, Gender: ${gender}, Medical History: ${medicalHistory}`;
    logList.appendChild(listItem);

    form.reset();
  });
});
