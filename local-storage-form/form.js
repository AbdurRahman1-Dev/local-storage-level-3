// utility
// input values
function getInputValue(inputId) {
  let input = document.getElementById(inputId);
  let inputValue = input.value;
  document.getElementById(inputId).value = ""
  return inputValue;
}

// set to local storage 
function setLocalName(key, value) {
  localStorage.setItem(key, value)
}

// delete local storage
function deleteLocal(key) {
  localStorage.removeItem(key)
}
// add events
// set
function send(id, inputId, name) {
  document.getElementById(id).addEventListener('click', () => {
    let value = getInputValue(inputId);
    setLocalName(name, value)
  })
}
// remove
function remove(id, name) {
  document.getElementById(id).addEventListener('click', () => {
    deleteLocal(name)
  })
}


function SendALL() {
  let name = getInputValue("name");
  let email= getInputValue("email");
  let message= getInputValue("message");

  let person = {
    name: name,
    Email: email,
    message: message
  }

  localStorage.setItem("person", JSON.stringify(person))
  
}
// set name
send("addName","name", "Name")

// remove name
remove("deleteName", "Name")

// set emial
send('addMail', 'email', "E-mail")

// delete email
remove('delteMail', "E-mail")

// add message
send("addMessage","message", "Message")

// remove message
remove("removeMessage", "Message")


function reset() {
  localStorage.clear()
}



// show info

function show() {
  let info = document.getElementById('info');
  // info.innerHTML += `
  // <div class="card border-dark mb-3" style="max-width: 18rem;">
  // <div class="card-header">Header</div>
  // <div class="card-body text-dark">
  //   <h2 class="card-title">${localStorage.getItem('Name')}</h2>
  //   <h5 class="card-title">${localStorage.getItem('E-mail')}</h5>
  //   <p class="card-text">${localStorage.getItem('Message')}</p>
  // </div>
  // `
  document.getElementById('myName').innerText = localStorage.getItem('Name')
  
  document.getElementById('myEmail').innerText = localStorage.getItem('E-mail')
  
  document.getElementById('myMessage').innerText = localStorage.getItem('Message')
}









