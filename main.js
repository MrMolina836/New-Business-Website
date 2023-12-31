/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
  });

  /*=============== Email JS ===============*/
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message')
    
    const sendEmail = (e) =>{
        e.preventDefault()

        //If the field has a value
        if (contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
            // Add / Remove color
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            //Show Message
            contactMessage.textContent = ' Write all the input fields'
        }else{
            // serviceID - templateID - #form  - publicKey
            emailjs.sendForm('service_4nm3fwc','template_mtzrcav','#contact-form','4BJdmi_pObajriD0Q')
            .then(() => {
                //Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent'

                //Remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! Message failed...', error)
            })
            // Clear input field
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
        }
    }
    contactForm.addEventListener('submit', sendEmail)
