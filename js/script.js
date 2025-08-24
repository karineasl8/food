"use strict"


window.addEventListener("DOMContentLoaded", function () {
  const tabHeadersParent = document.querySelector(".tabheader__items");
  const tabHeaders = tabHeadersParent.querySelectorAll(".tabheader__item");
  const tabContents = document.querySelectorAll(".tabcontent");


//  function for hide active class
  function hidesTabContent() {
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
      tabHeaders[i].classList.remove("tabheader__item_active");
    }
  }

//function for show active class
  function showTabContent(i = 0) {
    tabContents[i].style.display = "block";
    tabHeaders[i].classList.add("tabheader__item_active");
  }

  hidesTabContent();
  showTabContent();

  //event deligation
  tabHeadersParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
      for (let i = 0; i < tabContents.length; i++) {
        if (e.target  == tabHeaders[i]) {
          hidesTabContent();
          showTabContent(i);
        }
      }
    }
  });
});