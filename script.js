
window.addEventListener('DOMContentLoaded',()=> {
    let porf = document.querySelectorAll('.porft');
    porf.forEach((elem)=>{
        let url = elem.getAttribute('data-img-bg');
        elem.style.background = `url(${url})`;
    })
    let color = document.getElementById('color');
    color.addEventListener('click',()=>{

        let color_value = color.value;
        color.style.background = color_value 
        var root = document.documentElement;

        // Change the value of the --main-color variable
        root.style.setProperty('--primary-color', color_value);
    })


    let progress = document.querySelectorAll('.myprog');
    let progress2 = document.querySelectorAll('.progress2');
    progress2.forEach((pro)=>{
        let value = parseInt(pro.getAttribute('data-prog'))
        let i = 0 ;
        function increaseProgress(){
            if (i <= value){
                pro.textContent = `${i}%`
                i++;
                setTimeout(increaseProgress, 50);
            }
        }
        increaseProgress();
    })
    progress.forEach((pro)=>{
        let value = parseInt(pro.getAttribute('data-prog'))
        let i = 0 ;
        function increaseProgress(){
            if (i <= value){
                pro.style.width = `${i}%`
                i++;
                setTimeout(increaseProgress, 50);
            }
        }
        increaseProgress();
    })
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
    threshold: 0
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
})
