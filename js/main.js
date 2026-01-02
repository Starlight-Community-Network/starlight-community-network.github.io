function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    const overlay = document.getElementById('settingsOverlay');
    
    panel.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when settings is open
    document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
}

// Close settings on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const panel = document.getElementById('settingsPanel');
        if (panel.classList.contains('active')) {
            toggleSettings();
        }
    }
});

