const secondForStart = 6;
document.addEventListener("DOMContentLoaded", startLeadCatcher(secondForStart));
function startLeadCatcher(secondForStart) {
  const btnOpenModal = document.querySelector("#openModal");
  const modal = document.querySelector("#modal");
  const modalTrigger = document.querySelector("#modal__trigger");
  const btnModalClose = document.querySelector("#btnModalClose");
  const inputsRequired = document.querySelectorAll("[data-required]");
  let onceOpen = false;
  let timerBoolean = false;

  const closeModal = () => {
    modal.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
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
        





      console.log("Отправлено");
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