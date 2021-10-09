// nav open-close start

const toggleNavOpen = document.querySelector('.toggle-nav-open'),
    nav = document.querySelector('.nav')

const toggleNavClose = document.querySelector('.toggle-nav-close'),
    nav1 = document.querySelector('.nav opened')  

toggleNavOpen.addEventListener('click', () => {
    const exp = "true" === toggleNavClose.getAttribute('aria-expanded')
    const exp1 = "true" === toggleNavOpen.getAttribute('aria-expanded')

    toggleNavClose.setAttribute('aria-expanded', !exp),
    toggleNavOpen.setAttribute('aria-expanded', !exp1),
    nav.classList.add('opened')
})

toggleNavClose.addEventListener('click', () => {
    

    const exp2 = "false" === toggleNavOpen.getAttribute('aria-expanded')
    const exp3 = "false" === toggleNavClose.getAttribute('aria-expanded')
    toggleNavClose.setAttribute('aria-expanded', !exp2),
    toggleNavOpen.setAttribute('aria-expanded', !exp3),
    
    nav.classList.remove('opened')
    
    
})

// nav open-close end



// form validation start

let reg = /[A-Za-zA-Яа-яЁё]/,
    reg2 = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    reg3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let username = document.querySelector('#username'),
    phone = document.querySelector('#phone'),
    email = document.querySelector('#email');

document.querySelector('.submit__btn').onclick = function(e){
    e.preventDefault();
    if (!validate(reg, username.value)){
        notValid(username);
    }else{
        valid(username);
    }
    if (!validate(reg2, phone.value)){
        notValid(phone);
    }else{
        valid(phone);
    }
    if (!validate(reg3, email.value)){
        notValid(email);
    }else{
        valid(email);
    }
    
    if (username.classList == ('is-valid') && phone.classList == ('is-valid') && email.classList == ('is-valid')) {
        document.querySelector('.submit__btn').onclick = function(e){
            confirm("Подтвердите согласие с условиями");       
        }
    }
};

function validate (regex, username){
    return regex.test(username);
}

function validate (regex, phone){
    return regex.test(phone);
}

function validate (regex, email){
    return regex.test(email);
}

function notValid (username){
    username.classList.add('is-invalid');
}

function valid (username){
    username.classList.remove('is-invalid');
    username.classList.add('is-valid');
}

function notValid (phone){
    phone.classList.add('is-invalid');
}

function valid (phone){
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
}

function notValid (email){
    email.classList.add('is-invalid');
}

function valid (email){
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
}

// form validation end

//popup open-close start

var popup = document.getElementById('popup');
var btnGet = document.getElementById('find');
var btnClose = document.getElementsByClassName('popup__close')[0];

btnGet.onclick = function () {
    popup.style.display = "block";
}

btnClose.onclick = function () {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }

    //modal window close

    if (event.target == modal) {
        modal.style.display = "none";
    }

    //modal window close
}

//popup open-close end

// modal start

var modal = document.getElementById('modal');
var buttonOpen = document.getElementById('call__btn');
var modalClose = document.getElementsByClassName('modal__close')[0];

    buttonOpen.onclick = function(){
        modal.style.display = "block";
    }

    modalClose.onclick = function(){
        modal.style.display = "none"
    }    

// modal end

// call back telephone validation start

let telephone = document.querySelector('#telephone');

document.querySelector('.call__back__btn').onclick = function(e){
    e.preventDefault();
    if (!validate2(reg2, telephone.value)){
        notValid2(telephone);
    }else{
        valid2(telephone);
    }
    
    if (telephone.classList == ('is-valid')) {
        document.querySelector('.call__back__btn').onclick = function(e){
            alert("Уже вас набираем!");
            e.submit();       
        }
    }
};

function validate2 (regex, telephone){
    return regex.test(telephone);
}

function notValid2 (telephone){
    telephone.classList.add('is-invalid');
}

function valid2 (telephone){
    telephone.classList.remove('is-invalid');
    telephone.classList.add('is-valid');
}

// call back telephone validation end

//block animation start

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }else{
        change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  //block animation end