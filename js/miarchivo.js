
let nombre = [{
    name: "",
    surname: "",
}]
let user = [{
    email: "",
    password: "",
    user: ""
}]


nombre.name = prompt("Nombre:")

/*Funcion para validar y pedir datos.*/
function validator0(parametro, nameOfPar) {
    if (parametro !== " ") {
        surname = prompt(nameOfPar)
        nombre.surname = surname
    }

}

function validator1(parametro, nameOfPar) {
    if (parametro !== "") {
        pass = prompt(nameOfPar)
        user.password = pass
    }
}

validator0(nombre.name, "Apellido")

//guardado de dato en el arreglo, atributo "email".
user.email = prompt("Email:")

validator1(user.email, "Contrasenia")
user.user = prompt("Usuario:")
let confirmacion = confirm("Terminos y Condiciones")

console.log("Nombre:", nombre.name)
console.log("Apellido:", nombre.surname)
console.log("Email:", user.email)
console.log("Contrasenia:", user.password)
console.log("Usuario:", user.user)


const usuario = Object.assign(nombre,user)