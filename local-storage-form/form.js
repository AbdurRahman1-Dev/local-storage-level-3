// utility
// input values
function getInputValue(inputId) {
  let input = document.getElementById(inputId);
  let inputValue = input.value;
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
  info.innerHTML += `
  <div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h2 class="card-title">${localStorage.getItem('Name')}</h2>
    <h5 class="card-title">${localStorage.getItem('E-mail')}</h5>
    <p class="card-text">${localStorage.getItem('Message')}</p>
  </div>
  `
}
