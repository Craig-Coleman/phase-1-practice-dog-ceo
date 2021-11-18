console.log('%c HI', 'color: firebrick')

//Load images---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
            for (let i = 0; i < json.message.length; i++) {
                let img = document.createElement('img');
                img.setAttribute('src', json.message[i]);
                document.querySelector('#dog-image-container').appendChild(img);
            }
            })
    })


//Load breeds / Color Change-----------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        for (let i = 0; i < Object.keys(json.message).length; i++) {
            let  obj = Object.keys(json.message)[i];
            let li = document.createElement('li')
            li.innerText = obj
            document.querySelector('#dog-breeds').appendChild(li);
        }
        document.querySelectorAll('li').forEach(el => el.addEventListener('click', function (e) {
            e.target.style.color = 'red'
        }))
        document.querySelector('select').addEventListener('change', function (evt) {
           for (let i = 0; i < document.querySelector('select').length; i++) {
                document.querySelectorAll('li').forEach(function (el) {
                    if (el.innerText.charAt(0) !== evt.target.value) {
                        el.hidden = true;
                    } else {
                        el.hidden = false;
                    }
                })
            }
            
        })
    })
})

