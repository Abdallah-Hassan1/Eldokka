function setClass(element, value){
    element.setAttribute("class", value);
}

function setLanguage(lang) {
  if (lang === 'ar') {
    document.body.dir = "rtl";
    document.getElementById("title").innerText = "مطعم الدوكه";
    setClass(document.getElementsByClassName("language")[0], "language");
    setClass(document.getElementsByClassName("language")[1], "language active");
    document.getElementById("about-title").innerText = "من نحن";
    document.getElementById("about-text").innerText = "مرحبًا بكم في مطعم الدوكة. نقدم أشهى المأكولات الشرقية والغربية في أجواء مميزة.";
    document.getElementById("contact-title").innerText = "اتصل بنا";
    document.querySelector("footer p").innerText = `مطعم الدوكة ${new Date().getUTCFullYear()} ©`;
  } else {
    document.body.dir = "ltr";
    document.getElementById("title").innerText = "Eldokka Restaurant";
    setClass(document.getElementsByClassName("language")[0], "language active");
    setClass(document.getElementsByClassName("language")[1], "language");
    document.getElementById("about-title").innerText = "About Us";
    document.getElementById("about-text").innerText = "Welcome to Eldokka Restaurant. We serve delicious Eastern and Western dishes with a cozy atmosphere.";
    document.getElementById("contact-title").innerText = "Contacts";
    document.querySelector("footer p").innerText = `© ${new Date().getUTCFullYear()} Eldokka Restaurant`;
  }
}
