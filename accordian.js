window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 750px)').matches) {
    return;
  }

  const handleCollapse = (heading) => {
    const isOpen = !heading.classList.contains('block-collapsed');
    
    // Close all accordion items first
    const accordionHeadings = document.querySelectorAll('.grid .footer-block__heading');
    accordionHeadings.forEach((h) => {
      h.classList.add('block-collapsed');
      h.setAttribute('aria-expanded', 'false');
    });

    if (isOpen) {
      heading.classList.add('block-collapsed');
      heading.setAttribute('aria-expanded', 'false');
    } else {
      heading.classList.remove('block-collapsed');
      heading.setAttribute('aria-expanded', 'true');
    }
  };

  const accordionHeadings = document.querySelectorAll('.grid .footer-block__heading');

  accordionHeadings.forEach((heading) => {
    heading.classList.add('block-collapsed');
    heading.setAttribute('role', 'button');
    heading.setAttribute('aria-expanded', 'false');
    heading.setAttribute('tabindex', '0');

    heading.addEventListener('click', () => {
      handleCollapse(heading);
    });
    heading.addEventListener('keypress', () => {
      handleCollapse(heading);
    });
  });

  // Open the last accordion item by default
  const lastAccordionItemIndex = accordionHeadings.length - 1;
  if (lastAccordionItemIndex >= 0) {
    accordionHeadings[lastAccordionItemIndex].classList.remove('block-collapsed');
    accordionHeadings[lastAccordionItemIndex].setAttribute('aria-expanded', 'true');
  }
});
