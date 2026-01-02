// Sample community data with detailed server information
const communitiesData = [
    {
        id: 1,
        name: "Gaming Nexus",
        category: "gaming",
        description: "The ultimate gaming community for all platforms and genres",
        avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
        members: 15234,
        online: 3245,
        maxCapacity: 20000,
        serverOwner: "GameMasterPro",
        ownerStatus: "verified",
        securityLevel: "premium",
        features: ["Voice Channels", "Tournaments", "Game Nights", "Giveaways"],
        tags: ["Gaming", "Multiplayer", "Esports", "Casual"],
        created: "2021-03-15",
        language: "English",
        region: "Global",
        verificationLevel: "High",
        contentFilter: "Active",
        twoFactorRequired: true,
        nsfw: false
    },
    {
        id: 2,
        name: "Tech Innovators",
        category: "tech",
        description: "Discuss the latest in technology, programming, and innovation",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
        members: 8942,
        online: 1278,
        maxCapacity: 15000,
        serverOwner: "CodeWizard",
        ownerStatus: "verified",
        securityLevel: "enhanced",
        features: ["Code Reviews", "Tech News", "Career Advice", "Project Showcases"],
        tags: ["Programming", "Tech News", "Career", "Innovation"],
        created: "2020-11-22",
        language: "English",
        region: "Global",
        verificationLevel: "Medium",
        contentFilter: "Active",
        twoFactorRequired: false,
        nsfw: false
    },
    {
        id: 3,
        name: "Art Haven",
        category: "art",
        description: "A creative space for artists of all skill levels",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=200&fit=crop",
        members: 12678,
        online: 2891,
        maxCapacity: 18000,
        serverOwner: "CreativeMuse",
        ownerStatus: "verified",
        securityLevel: "enhanced",
        features: ["Art Critiques", "Tutorials", "Collaborations", "Challenges"],
        tags: ["Digital Art", "Traditional", "Tutorials", "Feedback"],
        created: "2020-08-10",
        language: "English",
        region: "Global",
        verificationLevel: "Medium",
        contentFilter: "Active",
        twoFactorRequired: false,
        nsfw: false
    },
    {
        id: 4,
        name: "Music Makers",
        category: "music",
        description: "Produce, share, and discuss music creation",
        avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
        members: 6721,
        online: 892,
        maxCapacity: 10000,
        serverOwner: "BeatDrop",
        ownerStatus: "unverified",
        securityLevel: "basic",
        features: ["Music Feedback", "Production Tips", "Collaborations", "Samples"],
        tags: ["Production", "EDM", "Hip-Hop", "Collaboration"],
        created: "2021-01-05",
        language: "English",
        region: "Global",
        verificationLevel: "Low",
        contentFilter: "Standard",
        twoFactorRequired: false,
        nsfw: false
    },
    {
        id: 5,
        name: "Fitness Warriors",
        category: "lifestyle",
        description: "Get fit, stay healthy, and share your journey",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
        members: 9456,
        online: 1567,
        maxCapacity: 12000,
        serverOwner: "FitGuru",
        ownerStatus: "verified",
        securityLevel: "enhanced",
        features: ["Workout Plans", "Nutrition Tips", "Progress Tracking", "Challenges"],
        tags: ["Fitness", "Nutrition", "Wellness", "Motivation"],
        created: "2020-12-18",
        language: "English",
        region: "Global",
        verificationLevel: "Medium",
        contentFilter: "Active",
        twoFactorRequired: false,
        nsfw: false
    },
    {
        id: 6,
        name: "Study Buddies",
        category: "education",
        description: "Study together, share resources, and achieve academic success",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ff6d9a81?w=80&h=80&fit=crop&crop=face",
        banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=200&fit=crop",
        members: 11234,
        online: 2134,
        maxCapacity: 15000,
        serverOwner: "StudyMaster",
        ownerStatus: "verified",
        securityLevel: "premium",
        features: ["Study Rooms", "Resource Sharing", "Tutoring", "Accountability"],
        tags: ["Studying", "Academic", "Resources", "Accountability"],
        created: "2020-09-25",
        language: "English",
        region: "Global",
        verificationLevel: "High",
        contentFilter: "Active",
        twoFactorRequired: true,
        nsfw: false
    }
];

let currentCommunities = [...communitiesData];
let displayedCount = 6;

// Render communities
function renderCommunities() {
    const grid = document.getElementById('communitiesGrid');
    grid.innerHTML = '';
    
    const communitiesToShow = currentCommunities.slice(0, displayedCount);
    
    communitiesToShow.forEach(community => {
        const communityCard = createCommunityCard(community);
        grid.appendChild(communityCard);
    });
    
    // Update load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (displayedCount >= currentCommunities.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

// Create community card
function createCommunityCard(community) {
    const card = document.createElement('div');
    card.className = 'community-detailed-card';
    
    const securityIcon = getSecurityIcon(community.securityLevel);
    const ownerStatusIcon = getOwnerStatusIcon(community.ownerStatus);
    
    card.innerHTML = `
        <div class="community-banner">
            <img src="${community.banner}" alt="${community.name}">
            <div class="community-category">${community.category}</div>
        </div>
        
        <div class="community-header">
            <img src="${community.avatar}" alt="${community.name}" class="community-avatar">
            <div class="community-info">
                <h3>${community.name}</h3>
                <p>${community.description}</p>
            </div>
        </div>
        
        <div class="community-tags">
            ${community.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="community-stats">
            <div class="stat">
                <span class="stat-icon">👥</span>
                <div class="stat-details">
                    <span class="stat-value">${community.members.toLocaleString()}</span>
                    <span class="stat-label">Members</span>
                </div>
            </div>
            <div class="stat">
                <span class="stat-icon">🟢</span>
                <div class="stat-details">
                    <span class="stat-value">${community.online.toLocaleString()}</span>
                    <span class="stat-label">Online</span>
                </div>
            </div>
            <div class="stat">
                <span class="stat-icon">📊</span>
                <div class="stat-details">
                    <span class="stat-value">${Math.round((community.online / community.members) * 100)}%</span>
                    <span class="stat-label">Activity</span>
                </div>
            </div>
        </div>
        
        <div class="server-info">
            <div class="info-row">
                <span class="info-label">Server Owner:</span>
                <div class="owner-info">
                    <span class="owner-name">${community.serverOwner}</span>
                    <span class="owner-status">${ownerStatusIcon}</span>
                </div>
            </div>
            <div class="info-row">
                <span class="info-label">Security Level:</span>
                <div class="security-info">
                    <span class="security-level ${community.securityLevel}">${community.securityLevel}</span>
                    <span class="security-icon">${securityIcon}</span>
                </div>
            </div>
            <div class="info-row">
                <span class="info-label">Verification:</span>
                <span class="verification-badge ${community.verificationLevel.toLowerCase()}">${community.verificationLevel}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Created:</span>
                <span class="created-date">${new Date(community.created).toLocaleDateString()}</span>
            </div>
        </div>
        
        <div class="community-features">
            <h4>Features</h4>
            <div class="features-list">
                ${community.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
            </div>
        </div>
        
        <div class="community-footer">
            <a class="join-btn" onclick="joinCommunity(${community.id})">
                Join Server
                <span class="btn-arrow">→</span>
            </a>
            <a class="details-btn" onclick="showCommunityDetails(${community.id})">
                View Details
            </a>
        </div>
    `;
    
    return card;
}

// Get security icon
function getSecurityIcon(level) {
    const icons = {
        'basic': '🔒',
        'enhanced': '🛡️',
        'premium': '🛡️'
    };
    return icons[level] || '🔒';
}

// Get owner status icon
function getOwnerStatusIcon(status) {
    const icons = {
        'verified': '✅',
        'unverified': '⚠️'
    };
    return icons[status] || '⚠️';
}

// Filter communities
function filterCommunities() {
    const category = document.getElementById('category').value;
    const size = document.getElementById('size').value;
    const security = document.getElementById('security').value;
    
    currentCommunities = communitiesData.filter(community => {
        let matches = true;
        
        if (category !== 'all' && community.category !== category) {
            matches = false;
        }
        
        if (size !== 'all') {
            if (size === 'small' && community.members >= 5000) matches = false;
            if (size === 'medium' && (community.members < 5000 || community.members > 15000)) matches = false;
            if (size === 'large' && community.members <= 15000) matches = false;
        }
        
        if (security !== 'all' && community.securityLevel !== security) {
            matches = false;
        }
        
        return matches;
    });
    
    displayedCount = 6;
    renderCommunities();
}

// Sort communities
function sortCommunities() {
    const sortBy = document.getElementById('sort').value;
    
    currentCommunities.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'members':
                return b.members - a.members;
            case 'online':
                return b.online - a.online;
            case 'newest':
                return new Date(b.created) - new Date(a.created);
            default:
                return 0;
        }
    });
    
    displayedCount = 6;
    renderCommunities();
}

// Search communities
function searchCommunities() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        currentCommunities = [...communitiesData];
    } else {
        currentCommunities = communitiesData.filter(community => 
            community.name.toLowerCase().includes(searchTerm) ||
            community.description.toLowerCase().includes(searchTerm) ||
            community.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    displayedCount = 6;
    renderCommunities();
}

// Load more communities
function loadMoreCommunities() {
    displayedCount += 6;
    renderCommunities();
}

// Join community
function joinCommunity(communityId) {
    const community = communitiesData.find(c => c.id === communityId);
    if (community) {
        // Simulate joining process
        alert(`Joining ${community.name}... Redirecting to Discord server!`);
        // In a real implementation, this would redirect to the Discord invite
        // window.open(`https://discord.gg/${community.inviteCode}`, '_blank');
    }
}

// Show community details
function showCommunityDetails(communityId) {
    // For now, redirect to the static Gaming Nexus page
    // In a real implementation, you'd have multiple static pages or use URL parameters
    window.location.href = 'community-details.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderCommunities();
    
    // Add animation to cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe community cards
    setTimeout(() => {
        document.querySelectorAll('.community-detailed-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});