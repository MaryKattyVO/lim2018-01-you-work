// -------------------- DOM ----------------------------------------------
const nameTxt = document.getElementById('inputName');
const lastName = document.getElementById('inputLastName');
const identification = document.getElementById('inputIdentification');
const company = document.getElementById('inputCompany');
const anfitrion = document.getElementById('inputAnfitrion');
const menssage = document.getElementById('inputMenssage');
const btnEnviar = document.getElementById('btnEnviar');
const date = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
const hour = new Date().getHours() + ':' + new Date().getMinutes()+horas;

btnEnviar.addEventListener('click', () => {
    const name = nameTxt.value;
    const apellido = lastName.value;
    const identificacion = identification.value;
    const empresa = company.value;
    const anfitrions = anfitrion.value;
    const mensaje = menssage.value;
    const obj={
        name,
        apellido,
        identificacion,
        empresa,
        anfitrions,
        mensaje,
        date,
        hour
        
    }
    firebase.database().ref('visitors/one').set(obj);
})

// //get: obtener elements
// const preObject = document.getElementById('object');

// //Crear referencias
// const dbRefObject = firebase.database().ref().child('object');

// //Sincronizar object changes(cambio)

// dbRefObject.on('value', snap => console.log(snap.val()));
