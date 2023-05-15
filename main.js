var tabs = document.querySelectorAll(".tabs_wrap ul li");
var males = document.querySelectorAll(".male");
var females = document.querySelectorAll(".female");
var all = document.querySelectorAll(".item_wrap");



tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item)=>{
      item.style.display = "none";
    })

    if(tabval == "male"){
      males.forEach((male)=>{
        male.style.display = "block";
      })
    }
    else if(tabval == "female"){
      females.forEach((female)=>{
        female.style.display = "block";
      })
    }
    else{
      all.forEach((item)=>{
        item.style.display = "block";
      })
    }

  })
})

const activeTabs = JSON.parse(localStorage.getItem('activeTabs')) || {};


const tabsWraps = document.querySelectorAll('.tabs_wrap');
tabsWraps.forEach(tabsWrap => {
  const tabs = tabsWrap.querySelectorAll('ul li');
  const key = tabsWrap.getAttribute('data-tabs-wrap');
  const activeTab = activeTabs[key] || 'both';

  tabs.forEach(tab => {
    if (tab.getAttribute('data-tabs') === activeTab) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  filterItems(tabsWrap, activeTab);
});


const tabs = document.querySelectorAll('.tabs_wrap ul li');
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const tabsWrap = this.closest('.tabs_wrap');
    const tabs = tabsWrap.querySelectorAll('ul li');

   
    tabs.forEach(tab => tab.classList.remove('active'));

    
    this.classList.add('active');


    const activeTab = this.getAttribute('data-tabs');
    const key = tabsWrap.getAttribute('data-tabs-wrap');
    activeTabs[key] = activeTab;
    localStorage.setItem('activeTabs', JSON.stringify(activeTabs));

    filterItems(tabsWrap, activeTab);
  });
});

function filterItems(tabsWrap, tab) {
  const items = tabsWrap.nextElementSibling.querySelectorAll('.item_wrap');

  items.forEach(item => {
    const itemGender = item.classList.contains(tab);
    if (tab === 'both' || itemGender) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
