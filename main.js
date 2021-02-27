const dom = {
  cacheDom() {
    //window
    this.mediaMob = window.matchMedia('(max-width: 450px)');
    this.mediaTab = window.matchMedia('(max-width: 768px)');
    this.mediaDesk = window.matchMedia('(min-width: 769px)')
    // photo wrapper
    this.photoWrapper = document.getElementById('photo-wrapper');

    // image info
    this.description = document.getElementById('description');
    this.gear = document.getElementById('gear');

    // arrows and dots
    this.leftArrow = document.getElementById('left');
    this.rightArrow = document.getElementById('right');
    this.dots = Array.from(document.querySelectorAll('.dots'));
    this.dotsSpan = Array.from(document.querySelectorAll('.dotspan'));

    // event listeners
    this.leftArrow.addEventListener('click', this.leftFunction);
    this.rightArrow.addEventListener('click', this.rightFunction);
    this.dots.forEach((dot) => {
      dot.addEventListener('click', this.dotFunction);
    });
  },
  getImage(index) {
    this.photoWrapper.firstElementChild.remove();
    this.photoWrapper.insertAdjacentHTML('afterbegin', `
    <img src="${images.array[index].file}" alt="${images.array[index].description}" id="photo" class="animate">
    `);
    this.description.innerHTML = images.array[index].description;
    this.gear.innerHTML = images.array[index].gear;
  },
  fillDot() {
    this.dotsSpan.forEach((el) => {
      const dot = el;
      const parent = dot.parentElement
      if (parseInt(parent.getAttribute('data-index'), 10) === images.index) {
        dot.style.opacity = '1';
        if (this.mediaMob.matches) {
          dot.style.fontSize = '2rem';
        } else if (this.mediaTab.matches) {
          dot.style.fontSize = '2.5rem';
        } else {
          dot.style.fontSize = '3.5rem';
        }

      } else {
        dot.style.opacity = '0.3';
        if (this.mediaMob.matches) {
          dot.style.fontSize = '1.5rem';
        } else if (this.mediaTab.matches) {
          dot.style.fontSize = '2rem';
        } else {
          dot.style.fontSize = '3rem';
        }
      }
    });
  },
  leftFunction() {
    if (images.index > 0) {
      images.index -= 1;
      dom.getImage(images.index);
      dom.fillDot();
    }
  },
  rightFunction() {
    if (images.index < 10) {
      images.index += 1;
      dom.getImage(images.index);
      dom.fillDot();
    }
  },
  dotFunction() {
    const index = parseInt(this.getAttribute('data-index'), 10);
    if (index !== images.index) {
      dom.getImage(index);
    }
    images.index = index;
    dom.fillDot();
  },
};

const images = {
  init() {
    this.array = [
      { file: '/img/1.jpg', description: 'Statue of the fallen angel, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/2.jpg', description: 'Tree in Retiro, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/3.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/4.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/5.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/6.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/7.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/8.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/9.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/10.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
      { file: '/img/11.jpg', description: 'Fernando, Madrid, 2020', gear: 'Zeiss Ikon Nettar 51812' },
    ];
    this.index = 0;
  },
};

dom.cacheDom();
images.init();
dom.getImage(0);
dom.fillDot();