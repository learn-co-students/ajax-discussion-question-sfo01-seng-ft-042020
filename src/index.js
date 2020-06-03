const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  // makeRequest();
  const submitButton = document.getElementById('submit');
  
  
  submitButton.addEventListener('click', function() {makeRequest()})
});


function makeRequest(){
  const data = fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(json => renderContent(json));
}


function renderContent(json) {
  console.log(json)
  const person = json.results[0]
  const name = document.createTextNode(`${person.name.first} ${person.name.last}`);
  const email = person.email;
  const fullname = document.getElementById('fullname')
  // fullname.innerHTML(`${person.name.first} ${person.name.last}`)
  fullname.appendChild(name)
  const emailField = document.getElementById('email')
  emailField.innerText = email;


}