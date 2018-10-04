//-------------------- DOM ----------------------------------------------
const nameTxt = document.getElementById('inputName');
const lastName = document.getElementById('inputLastName');
const identification = document.getElementById('inputIdentification');
const company = document.getElementById('inputCompany');
const anfitrion = document.getElementById('inputAnfitrion');
const menssage = document.getElementById('inputMenssage');
const btnEnviar = document.getElementById('btnEnviar');
const date = new Date().getDate() + 'day ' + new Date().getMonth() + 'month ' + new Date().getFullYear() + 'year ';
const hour = new Date().getHours() + 'h ' + new Date().getMinutes() + 'min ' + new Date().getSeconds() + 'sec';

btnEnviar.addEventListener('click', () => {
    const name = nameTxt.value;
    const apellido = lastName.value;
    const identificacion = identification.value;
    const empresa = company.value;
    const anfitrions = anfitrion.value;
    const mensaje = menssage.value;
    alert(name);
})