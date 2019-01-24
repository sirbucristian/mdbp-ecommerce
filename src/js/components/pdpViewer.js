let pdpImageIndex = 1;

function showSlides(n) {
  const pdpImages = document.getElementsByClassName('pdp-image');
  const navigation = document.getElementsByClassName('thumbnail');
  pdpImageIndex = n;

  if (pdpImageIndex > pdpImages.length) {
    pdpImageIndex = 1;
  }

  if (pdpImageIndex < 1) {
    pdpImageIndex = pdpImages.length;
  }


  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pdpImages.length; i++) {
    pdpImages[i].classList.remove('d-block');
  }


  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove('active');
  }

  pdpImages[pdpImageIndex - 1].classList.add('d-block');
  navigation[pdpImageIndex - 1].classList.add('active');
}

// Next/previous controls
function plusSlides(n) {
  showSlides(pdpImageIndex += n);
}

if (document.getElementsByClassName('pdp-image').length) {
  showSlides(pdpImageIndex);

  document.querySelectorAll('.prev')[0].addEventListener('click', () => plusSlides(-1));
  document.querySelectorAll('.next')[0].addEventListener('click', () => plusSlides(1));
  document.querySelectorAll('.thumbnail-container')[0].addEventListener('click', ({ target: { dataset: { id = '' } = {} } = {} } = {}) => {
    const newPdpImageIndex = +id;

    if (newPdpImageIndex && newPdpImageIndex !== pdpImageIndex) {
      showSlides(newPdpImageIndex);
    }
  });
}
