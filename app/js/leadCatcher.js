const secondForStart = 6;
document.addEventListener("DOMContentLoaded", startLeadCatcher(secondForStart));
function startLeadCatcher(secondForStart) {
  const btnOpenModal = document.querySelector("#openModal");
  const modal = document.querySelector("#modal");
  const modalTrigger = document.querySelector("#modal__trigger");
  const btnModalClose = document.querySelector("#btnModalClose");
  const formLeadCatcher = document.querySelector("#formLeadCatcher");
  const inputsRequired = document.querySelectorAll("[data-required]");

  let onceOpen = false;
  let timerBoolean = false;

  const name = document.querySelector('.lead-catcher__name-input')
  const tel = document.querySelector('.lead-catcher__tel-input')
  const ta = document.querySelector('.lead-catcher__ta-ta')

  name.addEventListener('input',((e)=>formData.name= e.target.value))
  tel.addEventListener('input',((e)=>formData.tel= e.target.value))
  ta.addEventListener('input',((e)=>formData.ta= e.target.value))

  const formData = {
      name: name,
      tel: tel,
      text: ta,
  }
  const closeModal = () => {
    modal.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
    formLeadCatcher.reset()
  };
  const openModal = () => {
    modal.classList.toggle("show");
    document.body.classList.add("overflow-hidden");
    onceOpen = true;
  };
  const triggerModal = () => {
    if (!onceOpen && timerBoolean) {
      openModal();
    }
  };
  const checkRequired = () => {
    let valid = true;
    inputsRequired.forEach((el) => {
      if (el.value === "" || el.value[15] === "_") {
        el.classList.add("error");
        el.placeholder = "Required to fill in";
        valid = false;
      } else {
        el.classList.remove("error");
      }
    });
    return valid;
  };
  const  submitForm = async(e) => {
    e.preventDefault();
    if (checkRequired()) {
        try {
            await fetch('http://a0678292.xsph.ru/mailer/sendmail.php', {
                method: "POST",
                body: formData
            }) 
            console.log(formData);
            console.log("Отправлено");
            
        } catch (error) {
            console.log(error);
        }
        closeModal();
    }
  };

  setTimeout(() => (timerBoolean = true), secondForStart + "000");

  btnOpenModal.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);
  btnModalClose.addEventListener("click", closeModal);
  modalTrigger.addEventListener("mouseout", triggerModal);
  modal.addEventListener("submit", submitForm);
  modalWindow.addEventListener("click", (e) => e.stopPropagation());
}