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

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('text-black');
      entry.target.classList.remove('text-transparent');


    } else {
      entry.target.classList.add('text-transparent');
      entry.target.classList.remove('text-black');

    }
  })
})
const hiddenElements2 = document.querySelectorAll('.obs2');
hiddenElements2.forEach((element) => observer2.observe(element));