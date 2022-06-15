window.onload = function() {
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
  var volverAJugar = document.getElementById("volverAJugar");
  var modalCloseBtn = document.getElementById("modal-close-button");
  var modalSection = document.getElementById("modal-section");
  var respuestas = ['piano', 'robot', 'poeta', 'tapon', 'raton', 'plato', 'tropa', 'pacto', 'silla', 'pasto', 'patio', 'birra', 'papel', 'funda', 'bolsa', 'media', 'plata', 'anana', 'balon'];
  var respuesta;
  var respuestaSplit;
  let contador = 0;

  function elegirRespuesta() {
    respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    respuestaSplit = respuesta.split("");
    console.log(respuestaSplit);
  }
  elegirRespuesta()

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
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      return openModal()
    };
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
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      return openModal()
    };
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
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      return openModal()
    };
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
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      return openModal()
    };
  };

 // MODAL SETTINGS

  function openModal (){
    modalSection.style.display = 'flex';
  }

  function closeModal (e){
    if(e.target == modalSection){
      modalSection.style.display = 'none';
    }
  }
  window.addEventListener('click', closeModal);

  volverAJugar.onclick = function (e) {
   window.location.reload();
  };

  modalCloseBtn.onclick = function(){
    modalSection.style.display = "none";
  }
}
