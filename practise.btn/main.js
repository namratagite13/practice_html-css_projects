document.getElementById("nav__links").addEventListener("click", function(e) {
    const turn = e.target;
    if (turn.classList.contains('menu-arrow-down')) { // make sure we only target elements with this class
      turn.classList.toggle('open');
      // here you can test tgt.classList.contains('open') to see the state
    }
  });