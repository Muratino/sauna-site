export const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    const form = contactSection.querySelector('form');
    if (form) {
      const firstInput = form.querySelector('input');
      firstInput?.focus();
    }
  }
};