//Selecciona los elementos del DOM
const fetchDogButton = document.getElementById('fetchDogButton');
const dogImage = document.getElementById('dogImage');

//funcion  para obtener la imagen de un perro aleatorio
function fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    //promesas
    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error('Error en obtener imagen');
        }
        return response.json();
    })  
    .then(data => {
        //imagen
        dogImage.src = data.message;
        dogImage.style.display =  'block';

})
    .catch(error =>{
        console.error('Error:', error);
    });
}

//evento para btn
fetchDogButton.addEventListener('click', fetchDogImage);