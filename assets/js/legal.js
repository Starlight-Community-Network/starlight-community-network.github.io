    function showLegalSection(sectionId) {
        document.querySelectorAll('.legal-section').forEach(section => {
            section.classList.remove('active');
        });

        document.querySelectorAll('.legal-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');

        event.target.classList.add('active');

        document.querySelector('.legal-content').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });