import UserFunc from './UserFunc.js'
import render from "./render.js";

let form = document.getElementById('form')
let ism = document.getElementById('userIsm')
let fam = document.getElementById('userFam')
let guruh = document.getElementById('userGuruh')
let jins = document.getElementById('userGender')
let tbody = document.querySelector('.tbody')


// storage elon qilish va uni dataga tenglashtirish
let storage = window.localStorage;
let code = storage.getItem('data')

let data;
if (code) {
    data = JSON.parse(code)
} else {
    data = []
}


// submit bosilganda funcsiya
form.addEventListener('submit', function (event) {
    event.preventDefault()
    // yangi object yaratish
    let newObject = new UserFunc(ism.value,fam.value,guruh.value,jins.value)

    // dataga push qilish
    data.unshift(newObject)

    render(tbody, data)
    
    
    // storagega push qilish
    storage.setItem('data', JSON.stringify(data))
    
    // inputni tozala
    ism.value = '';
    fam.value = '';
    guruh.value = '';
    jins.value = '';
})
render(tbody, data)



