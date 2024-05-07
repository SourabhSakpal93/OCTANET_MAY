setTimeout(() => {
    document.getElementById("model-y-info").style.opacity = 1;
    document.getElementById("model-y-info").style.transform = "translateY(0)";
  }, 0);

  setTimeout(() => {
    document.getElementById("model-y-footer").style.opacity = 1;
    document.getElementById("model-y-footer").style.transform = "translateY(0)";
  }, 1000);


  const navContainer = document.querySelector('.nav-container');


  let prevScrollPos = window.pageYOffset;

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;


    if (prevScrollPos < currentScrollPos) {
      navContainer.classList.add('nav-hidden'); // Hide the navigation bar
    } else {
      navContainer.classList.remove('nav-hidden'); // Show the navigation bar
    }


    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);
