window.onload = function(){
  var buttonFormOne = document.getElementById("buttonFormOne");
  var allInputsFirstForm = document.getElementsByClassName("firstFormInput");
  var buttonFormTwo = document.getElementById("buttonFormTwo");
  var allInputsSecondForm = document.getElementsByClassName("secondFormInput");
  var buttonFormThree = document.getElementById("buttonFormThree");
  var allInputsthirdFormInput = document.getElementsByClassName("thirdFormInput");
  var buttonFormFour = document.getElementById("buttonFormFour");
  var allInputsfourthFormInput = document.getElementsByClassName("fourthFormInput");
  var buttonFormFive = document.getElementById("buttonFormFive");
  var allInputsfifthFormInput = document.getElementsByClassName("fifthFormInput");
  var tituloModal = document.getElementById("modal-title");
  var respuesta = 'piano';
  var respuestaSplit = respuesta.split('')
  let contador = 0;

  function openModal() {
    modalSection.style.display = "flex";
  }

  buttonFormOne.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsFirstForm).forEach(function(input, index, array){
      input.setAttribute("disabled", "");
      if (respuestaSplit[index] === input.value) {
        contador++
        return input.classList.add("acierto");
      };
      if (!respuestaSplit.includes(input.value)) return input.classList.add('noExiste');
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    })
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      return openModal()
    };
  };

  buttonFormTwo.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsSecondForm).forEach(function (input, index, array) {
      input.setAttribute("disabled", "");
      if (respuestaSplit[index] === input.value) {
        contador++;
        return input.classList.add("acierto");
      }
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
    if (contador === 5) return console.log("GANASTE!");
  };

  buttonFormThree.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsthirdFormInput).forEach(function (input, index, array) {
      input.setAttribute("disabled", "");
      if (respuestaSplit[index] === input.value) {
        contador++
        return input.classList.add("acierto");
      }
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
    if (contador === 5) return console.log("GANASTE!");
  };

  buttonFormFour.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsfourthFormInput).forEach(function (input, index, array) {
      input.setAttribute("disabled", "");
      if (respuestaSplit[index] === input.value) {
        contador++
        return input.classList.add("acierto");
      }
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
    if (contador === 5) return console.log("GANASTE!");
  };

  buttonFormFive.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsfifthFormInput).forEach(function (input, index, array) {
      input.setAttribute("disabled", "");
      if (respuestaSplit[index] === input.value) {
        contador++
        return input.classList.add("acierto");
      }
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
    if (contador === 5) return console.log("GANASTE!");
  };

 // MODAL SETTINGS

  var modalSection = document.getElementById('modal-section');

  function openModal (){
      modalSection.style.display = 'flex';
  }

  function closeModal (e){
      if(e.target == modalSection){
          modalSection.style.display = 'none';
      }
  }
  window.addEventListener('click', closeModal);

  var modalCloseBtn = document.getElementById('modal-close-button');
  modalCloseBtn.onclick = function (){
      modalSection.style.display = 'none';
  }
}

