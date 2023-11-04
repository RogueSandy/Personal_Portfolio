// Scroll in animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// navbar active link
const navLinks = document.querySelectorAll('.navlinks a');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.querySelector('.navlinks a.active')?.classList.remove('active');
        navLink.classList.add('active');
    })
})

//form submit button
const subBtn = document.querySelector('.submitbtn');
// const textarea = document.querySelector('.text');
const inputs = document.querySelectorAll('.input');
const form = document.querySelector('.contact-form form');
const formMsg = document.querySelector('.form-msg');

subBtn.addEventListener('click',() => {
    inputs.forEach(input => input.value = "");

    //msg display
    formMsg.style.display = 'block';
    
    setTimeout(() => {
        formMsg.style.display = 'none';
    },3000);
})

// custom cursor
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})
document.querySelectorAll('button').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})

// light-dark mode 
const body = document.querySelector('body');
const modeBtn = document.getElementById('modebtn');

modeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')){
        modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    else{
        modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

})