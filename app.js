// Explication du Site

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toggleExplication();
    }
});

// Pop Up Profil Pic

let isOut = false;

document.querySelector('.profil-img').addEventListener('click', function() {
    toggleProfilPic();
});



//Animation

const targets = document.querySelectorAll('[class*="reveal-"]');

// Évènements

document.addEventListener('DOMContentLoaded', () => {
    targets.forEach(function (target) {
        target.classList.add('reveal-visible')
    })
    
})


// Fonctions

function print(a) {
    console.log(a)
}

function toggleProfilPic() {
    document.querySelector('.popup-profil-pic').classList.toggle('none');
    isOut =! isOut;
}

function toggleExplication() {
    document.querySelector('.explication-site').classList.toggle('none');
}
