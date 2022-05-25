btnOpenModal = document.querySelector('#openModal')
modal = document.querySelector('#modal')
modalTrigger = document.querySelector('#modal__trigger')


let onceOpen = false
let timerBoolean = false 

const closeModal = () => {
    modal.classList.toggle('show')
    document.body.classList.remove('overflow-hidden')
}
const openModal = () => {
    modal.classList.toggle('show')
    document.body.classList.add('overflow-hidden')
}
const triggerModal = () => {
    if (!onceOpen && timerBoolean) {
        openModal()
        onceOpen=true
    } 
}

setTimeout(()=>timerBoolean=true,4000)


btnOpenModal.addEventListener('click',openModal)
modal.addEventListener('click',closeModal)
modalTrigger.addEventListener('mouseout',triggerModal);


modalWindow.addEventListener('click',e=>e.stopPropagation())