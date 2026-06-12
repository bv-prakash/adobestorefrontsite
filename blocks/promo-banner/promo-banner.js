export default function decorate(block) {
  const [imageDiv, contentDiv] = [...block.children];

  block.classList.add('promo-banner-block');
  if (imageDiv) imageDiv.classList.add('promo-banner-image');
  if (contentDiv) contentDiv.classList.add('promo-banner-content');
}
