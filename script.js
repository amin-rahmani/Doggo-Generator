const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //turn the message into an object
        const breedsArray = Object.keys(breedsObject) // turn the object into an array
        // console.log(breedsArray);
        // console.log(breedsObject);
        for (let i=0;i<breedsArray.length;i++){
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value='breed'> </option>
            option.innerText = breedsArray[i] //<option value='breedName'>breedsArray[i]</option>
            select.appendChild(option) // now we added to select tag in html
        }
    })
