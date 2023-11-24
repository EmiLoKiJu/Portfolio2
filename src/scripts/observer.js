const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove('text-black');
      entry.target.classList.add('text-white');

    } else {

      entry.target.classList.add('text-black');
      entry.target.classList.remove('text-white');
    }
  })
})
const hiddenElements = document.querySelectorAll('.obs');
hiddenElements.forEach((element) => observer.observe(element));