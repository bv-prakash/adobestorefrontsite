export default function decorate(block) {
  block.classList.add('hero-slider-block');

  const slides = [...block.children];
  const track = document.createElement('div');
  track.className = 'hero-slider-track';

  slides.forEach((slide) => {
    slide.classList.add('hero-slider-slide');
    const [imageDiv, contentDiv] = [...slide.children];
    if (imageDiv) imageDiv.classList.add('hero-slider-image');
    if (contentDiv) contentDiv.classList.add('hero-slider-content');
    track.append(slide);
  });

  block.innerHTML = '';
  block.append(track);

  const dots = document.createElement('div');
  dots.className = 'hero-slider-dots';

  const total = slides.length;
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dots.children].forEach((dot) => {
      dot.classList.toggle('active', Number(dot.dataset.index) === index);
    });
  }

  function goToSlide(event) {
    index = Number(event.currentTarget.dataset.index);
    update();
  }

  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement('button');
    dot.className = 'hero-slider-dot';
    dot.dataset.index = i;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', goToSlide);
    dots.append(dot);
  }

  block.append(dots);
  update();

  if (total > 1) {
    let autoplay = setInterval(() => {
      index = (index + 1) % total;
      update();
    }, 6000);

    block.addEventListener('mouseenter', () => clearInterval(autoplay));
    block.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        index = (index + 1) % total;
        update();
      }, 6000);
    });
  }
}
