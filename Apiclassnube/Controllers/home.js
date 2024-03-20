import{userstate, loginout} from '../Controllers/firebase.js'

userstate()

const sesion = document.getElementById('btnLogout');
async function cerrarsesion(){
    const verificacion=loginout()
    const comprobar = await verificacion

    .then((comprobar)=>{
        alert('Sesion cerrada')
        window.location.href='../index.html'
    })
    .catch((error)=>{
        alert('Sesion no cerrada')
    })
}

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click', cerrarsesion)
})