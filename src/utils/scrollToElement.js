export function scrollToElement(id, offset) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export function handleScroll(event, offset) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const id = href.substring(1); // Remove the prefix '#' character
  scrollToElement(id, 150);
};