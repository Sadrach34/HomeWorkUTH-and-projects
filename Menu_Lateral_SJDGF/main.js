const MenuToggle = document.querySelector('.Menu-toggle');
const navigation = document.querySelector('.navigation');

MenuToggle.onclick = function(){
    navigation.classList.toggle('open');
}

const list = document.querySelectorAll('.list');

function activarlink(){
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach((item) => item.addEventListener('click',activarlink));