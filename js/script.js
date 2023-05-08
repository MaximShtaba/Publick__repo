let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose)
  });
};

function selectToggle() {
  this.parentElement.classList.toggle("is-active");
  this.parentElement.querySelector(".select__icon").classList.toggle("rotate");
}

function selectChoose() {
  let text = this.innerText;
  let select = this.closest(".select")
  let currentText = select.querySelector(".select__current");
  let arrow = select.querySelector(".select__icon");
  currentText.innerText = text;
  select.classList.remove("is-active");
  select.querySelector(".select__icon").classList.remove("rotate")
}

select();

let tabs = function () {
  let tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  let tabsItem = document.querySelectorAll(".tabs__item");
  tabsBtn.forEach(item => {
    item.addEventListener("click", showActiveTab);
    function showActiveTab() {
      let curentBtn = item;
      let tabId = curentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

       if (!curentBtn.classList.contains("active")) {

      

      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      })

      tabsItem.forEach(function (item) {
        item.classList.remove("active");
      })
      curentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  }

  })
}

tabs()