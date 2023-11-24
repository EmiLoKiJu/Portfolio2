const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('text-white');
      entry.target.classList.remove('text-transparent');


    } else {
      entry.target.classList.add('text-transparent');
      entry.target.classList.remove('text-white');

    }
  })
})
const hiddenElements = document.querySelectorAll('.obs');
hiddenElements.forEach((element) => observer.observe(element));