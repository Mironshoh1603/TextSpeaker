let select = document.querySelector(".select select");
selectOptions();
function selectOptions() {
  var voicelist = responsiveVoice.getVoices();
  voicelist.forEach((element) => {
    select.innerHTML += `
<option value ="${element.name}"> ${element.name}</option>`;
  });
}

button = document.querySelector(".button");
button.addEventListener("click", function () {
  let text = document.querySelector("#txt").value;
  responsiveVoice.speak(text);
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 3000);
});
select.addEventListener("change", function () {
  let lang = select.value;
  // let text = document.querySelector("#txt").value;
  responsiveVoice.setDefaultVoice(lang);
});
