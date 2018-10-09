// -------------------- DOM ----------------------------------------------
const nameTxt = document.getElementById('inputName');
const identification = document.getElementById('inputIdentification');
const menssage = document.getElementById('inputMenssage');
const btnEnviar = document.getElementById('btnEnviar');
const date = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
const hour = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
const contentTable = document.getElementById('contentTable');

btnEnviar.addEventListener('click', () => {
  const name = nameTxt.value;
  const identificacion = identification.value;
  const selector = document.getElementById('selector').value;

  const mensaje = menssage.value;
  const obj = {
    name,
    identificacion,
    selector,
    mensaje,
    date,
    hour
    // photo: dataURL
  }
  firebase.database().ref().child('visitors').push(obj);

  let ref = firebase.database().ref().child('visitors')
  ref.once('value', (data) => {
    console.log(data);
    data.forEach(visitor => {
      console.log(data);
      const visitorDate = visitor.val();
      console.log(visitorDate)
      sendMandrill(visitorDate);
    })
  })
})
//PINTANDO DATA EN TABLAS
firebase.database().ref().child('visitors')
  .on('value', (data) => {
    var content = '';
    data.forEach(e => {
      var element = e.val();
      content += "<tr><td></td><td>"+element.name+"</td><td>"+element.identificacion+"</td><td>"+element.date+"</td><td>"+element.hour+"</td></tr>";
    });
    contentTable.innerHTML = content;
  })
//---------------- CAPTURAR IMAGEN --------------------------------
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

const btnStarts = document.querySelector('#btnStarts');
const btnCapture = document.querySelector('#btnCapture');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const video = document.querySelector('video');

btnStarts.addEventListener('click', function () {

  navigator.getUserMedia({
    video: true
  }, function (stream) {
    var src = window.URL.createObjectURL(stream);
    video.src = src;
  }, function (e) {
    console.log(e);
  });

  btnCapture.addEventListener('click', function () {
    var canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    firebase.database().ref().child('visitors').push(dataURL);
    console.log(dataURL);
  }, false);

}, false);


// //get: obtener elements
// const preObject = document.getElementById('object');

// //Crear referencias
// const dbRefObject = firebase.database().ref().child('object');

// //Sincronizar object changes(cambio)

// dbRefObject.on('value', snap => console.log(snap.val()));
