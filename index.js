
const elementosLeft = document.querySelectorAll('.left')

  elementosLeft.forEach(function (left) { left.addEventListener('click', function () {
  left.classList.toggle('ativa')
  })
})