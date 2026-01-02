document.addEventListener('DOMContentLoaded', () => {
  const tabs   = document.querySelectorAll('.faq-tabs .tab');
  const panels = document.querySelectorAll('.faq-panels .panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const target = tab.dataset.topic;               
      panels.forEach(p => {
        const isActive = p.id === `topic-${target}`;
        p.classList.toggle('active', isActive);
        p.setAttribute('aria-hidden', !isActive);
      });
    });
  });
});