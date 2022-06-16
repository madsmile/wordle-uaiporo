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
  var formOne = document.getElementById("formOne");
  var formTwo = document.getElementById("formTwo");
  var formThree = document.getElementById("formThree");
  var formFour = document.getElementById("formFour");
  var formFive = document.getElementById("formFive");
  var reloj = document.getElementById("contenedorReloj");

  var respuestas = ['piano', 'robot', 'poeta', 'tapon', 'raton', 'plato', 'tropa', 'pacto', 'silla', 'pasto', 'quito', 'patio', 'birra', 'papel', 'funda', 'bolsa', 'media', 'plata', 'anana', 'balon'];
  var respuesta;
  var respuestaSplit;
  let contador = 0;
  let contadorErrores = 0;
  let tiempoDeJuego = 180;

  document.getElementById("firstLetter").addEventListener(
    "keydown", function(){
      setInterval(function () {
        reloj.innerHTML = tiempoDeJuego - 1;
        tiempoDeJuego--;
        if (tiempoDeJuego === 0) {
          tituloModal.innerText =
            "SE TE TERMINO EL TIEMPO" +
            "LA RESPUESTA CORRECTA ERA: " +
            respuesta.toUpperCase();
          return openModal();
        }
      }, 1000)
    }
  )

  function elegirRespuesta() {
    respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    respuestaSplit = respuesta.split("");
    // console.log(respuestaSplit);
  }
  elegirRespuesta()

  function openModal() {
    modalSection.style.display = "flex";
  }

  function ganoElUsuario() {
    if (contador === 5) {
      tituloModal.innerText = "GANASTE";
      document
        .querySelectorAll("input")
        .forEach((x) => x.setAttribute("disabled", ""));
      return openModal();
    }
  }

  formOne.addEventListener("keyup", function (e) {
    Array.from(allInputsFirstForm).forEach(function (input, index) {
      if (input.value.length === 1 && index < 4) {
        Array.from(allInputsFirstForm)[index + 1].focus();
      }
    });
  });
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
    ganoElUsuario()
    contador = 0;
    contadorErrores++;
    Array.from(allInputsSecondForm)[0].focus();
  };

  formTwo.addEventListener("keyup", function () {
    Array.from(allInputsSecondForm).forEach(function (input, index) {
      if (input.value.length === 1 && index < 4){
        Array.from(allInputsSecondForm)[index + 1].focus()
      };
    });
  });
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
    ganoElUsuario()
    contador = 0;
    contadorErrores++;
    Array.from(allInputsthirdFormInput)[0].focus();
  };

  formThree.addEventListener("keyup", function () {
    Array.from(allInputsthirdFormInput).forEach(function (input, index) {
      if (input.value.length === 1 && index < 4){
        Array.from(allInputsthirdFormInput)[index + 1].focus();
      }
    });
  });
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
    ganoElUsuario()
    contador = 0;
    contadorErrores++;
    Array.from(allInputsfourthFormInput)[0].focus();
  };

  formFour.addEventListener("keyup", function () {
    Array.from(allInputsfourthFormInput).forEach(function (input, index) {
      if (input.value.length === 1 && index < 4){
        Array.from(allInputsfourthFormInput)[index + 1].focus();
      }
    });
  });
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
    ganoElUsuario()
    contador = 0;
    contadorErrores++;
    Array.from(allInputsfifthFormInput)[0].focus();
  };

  formFive.addEventListener("keyup", function () {
    Array.from(allInputsfifthFormInput).forEach(function (input, index) {
      if (input.value.length === 1 && index < 4){
        Array.from(allInputsfifthFormInput)[index + 1].focus();
      }
    });
  });
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
    ganoElUsuario()
    contador = 0;
    contadorErrores++;
    console.log(contadorErrores)
    if(contadorErrores === 5) {
      tituloModal.innerText = `SE ACABARON LOS INTENTOS, LA RESPUESTA CORRECTA ERA:
      ${respuesta.toUpperCase()}`;
      return openModal()
    }
  };

 // MODAL SETTINGS

  function openModal (){
    reloj.remove();
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
