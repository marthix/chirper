document.onreadystatechange = function () {
  if (document.readyState === "complete") {

    var twerkInterval,
      logo = document.querySelector('.logo')

    document.body.addEventListener('mouseover', function(e){
      if (e.target.id === 'twerk') {
        twerkInterval = setInterval(twerk, 100)
        e.target.innerHTML = 'twerk'
        e.target.style.color = '#50e3c2'
      }
    })

    document.body.addEventListener('mouseout', function(e){
      if (e.target.id === 'twerk') {
        clearInterval(twerkInterval)
        resetTwerk()
        e.target.innerHTML = 'twork'
        e.target.style.color = '#e8fbf7'
      }
    })

    function twerk () {
      var a = Math.random() * 50;
      logo.style.transform = 'rotate(' + a + 'deg)'
    }

    function resetTwerk () {
      logo.style.transform = 'none'
    }
  }
}
