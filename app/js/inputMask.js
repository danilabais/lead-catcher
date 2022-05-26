document.addEventListener("DOMContentLoaded", startScript());
function startScript()  {
    const element = document.getElementById("phone");
    const maskOptions = {
      mask: "+7(000)000-00-00",
      lazy: false,
    };
    const mask = new IMask(element, maskOptions);
}