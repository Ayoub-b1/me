let contact = document.querySelectorAll('.conta');

contact.forEach((con)=>{
    if(con.getAttribute('href') !=='#'){
        con.classList.add('circles-active')
    }
    else{
        con.classList.remove('circles-active')
    }
})

const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        const correspondingButton = document.querySelector(`[href="#${sectionId}"]`);
        
        if (entry.isIntersecting) {
            correspondingButton.classList.add('circles-active');
        } else {
            correspondingButton.classList.remove('circles-active');
        }
  });
}, observerOptions);

// Observe sections
sections.forEach((section) => {
  observer.observe(section);
});

let menu_buttons = document.querySelectorAll('.nav-buttons');


window.addEventListener('DOMContentLoaded',()=> {
    let progress = document.querySelectorAll('.myprog');

    progress.forEach((pro)=>{
        let value = parseInt(pro.getAttribute('data-prog'))
        let i = 0 ;
        function increaseProgress(){
            if (i <= value){
                pro.style.width = `${i}%`
                i++;
                setInterval(increaseProgress, 100);
            }
        }
        increaseProgress();
    })
})
