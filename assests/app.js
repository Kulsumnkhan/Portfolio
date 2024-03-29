var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
var sideMenu = document.getElementById('sideMenu');

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-links');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tabName).classList.add('active-tab')
}

function openMenu(){
    sideMenu.style.right = '0';
}

function closeMenu(){
    sideMenu.style.right = '-200px';
}

/* <script> */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDT77y5_X9oWCw6uloAnQ80dJn7asL1cdGBA2yf4CJqiM28Qh3P3oJvVLWNV8Dk7mQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You. The details have been submitted.";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 4000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>

if(window.location.pathname === '/about.html'){
    document.body.style.overflow = 'hidden';
}