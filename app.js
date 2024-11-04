function print(a) {
    console.log(a)
}

// Explication du Site
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toggleExplication();
    }
});


// Évènements

document.addEventListener('DOMContentLoaded', () => {

})


// Fonctions

function toggleExplication() {
    document.querySelector('.explication-site').classList.toggle('none');
}