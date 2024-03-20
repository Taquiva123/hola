import{loginauth} from "../Controllers/firebase.js"

const recibir = document.getElementById("loginbtn")

async function validar(){

    const email = document.getElementById('edtuser').value
    const password=document.getElementById('edtpassword').value

    const verificar=loginauth(email,password)
    const validation = await verificar

    if(validation != null)
    {
        alert("User authentication succesfull "+email)
        window.location.href="../Templates/home.html"
    }
    else
    {
        alert("Error de usuario verifique usuario y/o contraseña")
        console.log("Sesion "+email+" not validation")
    }
}

window.addEventListener('DOMContentLoaded', async()=>{
    recibir.addEventListener('click', validar)
})