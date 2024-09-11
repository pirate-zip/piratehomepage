function toggleRS() {
  var element = document.getElementById("rsToggleable");
element.classList.toggle("roundscript");
}


if (window.matchMedia("(max-width: 767px)").matches){
  // The viewport is less than 768 pixels wide
  var mobile = document.getElementById("mobileTest");
  window.location.replace("/en/mobileuser")
  // mobile.classList.toggle("mobileConfirmed");
  // document.write("Unfortunately, Pirate has not optimized this website for mobile use. Please use a desktop or laptop computer. If you are using a desktop/laptop computer and getting this message, it is likely that your screen or window size is too small.");
  }