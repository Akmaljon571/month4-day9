import UserFunc from './UserFunc.js'
import func from "./func.js";
import { kattaHarf } from "./func.js";

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
    let newObject = new UserFunc(kattaHarf(ism.value),kattaHarf(fam.value),kattaHarf(guruh.value),jins.value)

    //tr yasahs 
    sana++
    tbody.prepend(func(newObject.UserIsmi,newObject.UserFam,newObject.UserGuruh,newObject.UserJinsi,sana))

    // dataga push qilish
    data.push(newObject)

    // storagega push qilish
    storage.setItem('data', JSON.stringify(data))

    // inputni tozala
    ism.value = '';
    fam.value = '';
    guruh.value = '';
    jins.value = '';
})
let sana = 0;
JSON.parse(storage.getItem('data')).forEach(key => {
    sana++
    tbody.prepend(func(key.UserIsmi,key.UserFam,key.UserGuruh,key.UserJinsi,sana))
});


