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
  var respuesta = 'piano';
  var respuestaSplit = respuesta.split('')

  buttonFormOne.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsFirstForm).forEach(function(input, index, array){
      if (respuestaSplit[index] === input.value) return input.classList.add('acierto');
      if (!respuestaSplit.includes(input.value)) return input.classList.add('noExiste');
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    })
  };

  buttonFormTwo.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsSecondForm).forEach(function (input, index, array) {
      if (respuestaSplit[index] === input.value) return input.classList.add("acierto");
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
  };

  buttonFormThree.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsthirdFormInput).forEach(function (input, index, array) {
      if (respuestaSplit[index] === input.value) return input.classList.add("acierto");
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
  };

  buttonFormFour.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsfourthFormInput).forEach(function (input, index, array) {
      if (respuestaSplit[index] === input.value) return input.classList.add("acierto");
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
  };

  buttonFormFive.onclick = function (e) {
    e.preventDefault();
    Array.from(allInputsfifthFormInput).forEach(function (input, index, array) {
      if (respuestaSplit[index] === input.value) return input.classList.add("acierto");
      if (!respuestaSplit.includes(input.value)) return input.classList.add("noExiste");
      if (respuestaSplit.includes(input.value) && respuestaSplit[index] !== input.value) return input.classList.add("lugarEquivocado");
    });
  };
}
