export default function decorate(block) {
  block.classList.add('custom-slider-block');

  const slides = [...block.children];
  const track = document.createElement('div');
  track.className = 'slider-track';

  slides.forEach((slide) => {
    slide.classList.add('slider-slide');
    track.append(slide);
  });

  block.innerHTML = '';
  block.append(track);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'slider-btn slider-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.textContent = '‹';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slider-btn slider-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.textContent = '›';

  block.append(prevBtn, nextBtn);

  let index = 0;
  const total = slides.length;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    update();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % total;
    update();
  });

  if (total > 1) {
    let autoplay = setInterval(() => {
      index = (index + 1) % total;
      update();
    }, 5000);

    block.addEventListener('mouseenter', () => clearInterval(autoplay));
    block.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => {
        index = (index + 1) % total;
        update();
      }, 5000);
    });
  }
}
