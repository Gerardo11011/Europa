document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();

  var inputValue = document.getElementById('name').value;
  document.getElementById('name').value = ''
  let li = document.createElement('li')
  let label2 = document.createElement('label')
  let label = document.createElement('label')
  label.innerText = "Nombre: " + inputValue


  var mail = document.getElementById('email').value;
  document.getElementById('email').value = ''
  label2.innerText = 'Email: ' + mail
  let li2 = document.createElement('li')
  li.appendChild(label)


  document.getElementById("Lista").appendChild(li);

  li2.appendChild(label2)
   document.getElementById("Lista").appendChild(li2);
   document.getElementById("Lista").style.marginTop = "50px";
   document.getElementById('Lista').innerHTML += '<br class = "marco">';
})
