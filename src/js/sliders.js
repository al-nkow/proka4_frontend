import Siema from 'siema';

const Sliders = () => {
  const newsSiema = new Siema({
    selector: '.newsSiema',
    perPage: {
      400: 1,
      600: 2,
      1240: 3
    },
    loop: true
  });
  document.querySelector('.news-prev').addEventListener('click', () => newsSiema.prev());
  document.querySelector('.news-next').addEventListener('click', () => newsSiema.next());

  const reviewSiema = new Siema({
    selector: '.reviewSiema',
    loop: true
  });
  document.querySelector('.reviewSiema-prev').addEventListener('click', () => reviewSiema.prev());
  document.querySelector('.reviewSiema-next').addEventListener('click', () => reviewSiema.next());

  const fameSiema = new Siema({
    selector: '.fameSiema',
    loop: true,
    duration: 500,
  });
  document.querySelector('.fameSiema-prev').addEventListener('click', () => fameSiema.prev());
  document.querySelector('.fameSiema-next').addEventListener('click', () => fameSiema.next());
};

export default Sliders;