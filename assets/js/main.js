let activePanel = null; 
let escapeHandler = null;
let overlayClickHandler = null;

function initUIControls() {

    cleanupHandlers();

    escapeHandler = (e) => {
        if (e.key !== 'Escape') return;

        if (activePanel === 'settings') {
            closePanel('settings');
        } else if (activePanel === 'mobileMenu') {
            closePanel('mobileMenu');
        }
    };

    overlayClickHandler = (e) => {
        if (e.target.classList.contains('settingsOverlay')) {
            closePanel('settings');
        } else if (e.target.classList.contains('mobileMenuOverlay')) {
            closePanel('mobileMenu');
        }
    };

    document.addEventListener('keydown', escapeHandler);
    document.addEventListener('click', overlayClickHandler);
}

function cleanupHandlers() {
    if (escapeHandler) {
        document.removeEventListener('keydown', escapeHandler);
        escapeHandler = null;
    }
    if (overlayClickHandler) {
        document.removeEventListener('click', overlayClickHandler);
        overlayClickHandler = null;
    }
}

function openPanel(panelName) {

    if (activePanel) {
        closePanel(activePanel);
    }

    const panelId = panelName === 'settings' ? 'settingsPanel' : 'mobileMenu';
    const overlayId = panelName === 'settings' ? 'settingsOverlay' : 'mobileMenuOverlay';

    const panel = document.getElementById(panelId);
    const overlay = document.getElementById(overlayId);

    if (!panel || !overlay) {
        console.warn(`Panel or overlay not found: ${panelId}, ${overlayId}`);
        return;
    }

    panel.classList.add('active');
    overlay.classList.add('active');
    activePanel = panelName;
    document.body.style.overflow = 'hidden';

    const firstFocusable = panel.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
    }
}

function closePanel(panelName) {
    const panelId = panelName === 'settings' ? 'settingsPanel' : 'mobileMenu';
    const overlayId = panelName === 'settings' ? 'settingsOverlay' : 'mobileMenuOverlay';

    const panel = document.getElementById(panelId);
    const overlay = document.getElementById(overlayId);

    if (!panel || !overlay) return;

    panel.classList.remove('active');
    overlay.classList.remove('active');

    if (activePanel === panelName) {
        activePanel = null;
        document.body.style.overflow = '';
    }
}

function toggleSettings() {
    if (activePanel === 'settings') {
        closePanel('settings');
    } else {
        openPanel('settings');
    }
}

function toggleMobileMenu() {
    if (activePanel === 'mobileMenu') {
        closePanel('mobileMenu');
    } else {
        openPanel('mobileMenu');
    }
}

function openSettingsFromMobileMenu() {
    if (activePanel === 'mobileMenu') {
        closePanel('mobileMenu');
    }
    openPanel('settings');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUIControls);
} else {
    initUIControls();
}

window.addEventListener('beforeunload', cleanupHandlers);