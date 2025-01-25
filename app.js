// Mock data for content
const contentData = {
    trending: [
        {
            title: "Deadpool & Wolverine",
            image: "https://image.tmdb.org/t/p/w500/yxQy1YZVBhD8yRYvBZg7XhWHSPa.jpg",
            year: "2024",
            path: "movies/deadpool-wolverine.html"
        },
        {
            title: "Beetlejuice Beetlejuice",
            image: "https://image.tmdb.org/t/p/w500/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
            year: "2024",
            path: "movies/beetlejuice-2.html"
        },
        {
            title: "Moana 2",
            image: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            year: "2024",
            path: "movies/moana-2.html"
        },
        {
            title: "Kingdom of the Planet of the Apes",
            image: "https://image.tmdb.org/t/p/w500/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg",
            year: "2024",
            path: "movies/kingdom-apes.html"
        },
        {
            title: "Godzilla x Kong: The New Empire",
            image: "https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            year: "2024",
            path: "movies/godzilla-x-kong.html"
        },
        {
            title: "Inside Out 2",
            image: "https://image.tmdb.org/t/p/w500/kUZ0sDpn2U7K4VhxqShQ3GHxzj6.jpg",
            year: "2024",
            path: "movies/inside-out-2.html"
        },
        {
            title: "The Fall Guy",
            image: "https://image.tmdb.org/t/p/w500/gg4zZoTggZmpAQ32qXEL6CoFOiI.jpg",
            year: "2024",
            path: "movies/fall-guy.html"
        },
        {
            title: "Furiosa: A Mad Max Saga",
            image: "https://image.tmdb.org/t/p/w500/xbxpvb6El3wE8j8OewoZn3qjyPl.jpg",
            year: "2024",
            path: "movies/furiosa.html"
        },
        {
            title: "Bad Boys 4",
            image: "https://image.tmdb.org/t/p/w500/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
            year: "2024",
            path: "movies/bad-boys-4.html"
        },
        {
            title: "Despicable Me 4",
            image: "https://image.tmdb.org/t/p/w500/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
            year: "2024",
            path: "movies/despicable-me-4.html"
        }
    ],
    recommendations: [
        {
            title: "The Last of Us",
            image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
            year: "2023",
            path: "movies/last-of-us.html"
        },
        {
            title: "Succession",
            image: "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
            year: "2023",
            path: "movies/succession.html"
        },
        {
            title: "Gran Turismo",
            image: "https://image.tmdb.org/t/p/w500/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
            year: "2023",
            path: "movies/gran-turismo.html"
        },
        {
            title: "Barbie",
            image: "https://image.tmdb.org/t/p/w500/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
            year: "2023",
            path: "movies/barbie.html"
        },
        {
            title: "House of the Dragon",
            image: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
            year: "2022",
            path: "movies/house-of-dragon.html"
        },
        {
            title: "Wednesday",
            image: "https://image.tmdb.org/t/p/w500/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
            year: "2022",
            path: "movies/wednesday.html"
        },
        {
            title: "The Bear",
            image: "https://image.tmdb.org/t/p/w500/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg",
            year: "2022",
            path: "movies/the-bear.html"
        }
    ]
};

// Movie details data
const movieDetailsData = {
    'deadpool-wolverine': {
        title: 'Deadpool & Wolverine',
        backdrop: 'https://image.tmdb.org/t/p/original/yQvjqIvOwpawVZje41Wno365kR.jpg',
        rating: 7.6,
        year: 2024,
        ageRating: '12+',
        duration: '3h 12m',
        genres: ['Action', 'Adventure', 'Fantasy'],
        synopsis: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home...',
        cast: [
            { name: 'Sam Worthington', role: 'Actor', image: 'https://image.tmdb.org/t/p/w200/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg' },
            { name: 'Zoe Saldana', role: 'Actress', image: 'https://image.tmdb.org/t/p/w200/iOVbUH20il632nj2v01NCtYYeSg.jpg' },
            { name: 'Stephen Lang', role: 'Actor', image: 'https://image.tmdb.org/t/p/w200/xq9UGxjZxYXBWxJnkYf7IzXFmrj.jpg' },
            { name: 'Sigourney Weaver', role: 'Actress', image: 'https://image.tmdb.org/t/p/w200/sHWCLx54yLtaFtppp5ADjsE3E8b.jpg' }
        ],
        audio: ['English', 'Polish', 'Germany', 'Spanish'],
        subtitles: ['English', 'Polish', 'Germany'],
        likes: 254,
        comments: 103,
        director: 'James Cameron',
        writers: ['James Cameron', 'Rick Jaffa', 'Amanda Silver'],
        releaseDate: 'December 16, 2022',
        budget: '$350,000,000',
        revenue: '$2,320,250,281',
        production: '20th Century Studios, Lightstorm Entertainment',
        language: 'English',
        keywords: ['3D', 'Sequel', 'Science Fiction', 'Alien World', 'Ocean', 'Family', 'Visual Effects']
    },
    'beetlejuice-2': {
        title: 'Beetlejuice Beetlejuice',
        backdrop: 'https://image.tmdb.org/t/p/original/aPQsU3yLDUOhLJYnSqkhKRkQTAw.jpg',
        rating: 8.5,
        year: 2024,
        ageRating: 'PG-13',
        duration: '2h 46m',
        genres: ['Science Fiction', 'Adventure', 'Drama'],
        synopsis: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family...',
        cast: [
            { name: 'Timothée Chalamet', role: 'Actor', image: 'https://image.tmdb.org/t/p/w200/BE2sdjpgsa2rNTFi8PpxqwzdhF.jpg' },
            { name: 'Zendaya', role: 'Actress', image: 'https://image.tmdb.org/t/p/w200/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg' }
        ],
        audio: ['English', 'French', 'Spanish'],
        subtitles: ['English', 'French', 'Spanish'],
        likes: 428,
        comments: 215,
        director: 'Denis Villeneuve',
        writers: ['Denis Villeneuve', 'Jon Spaihts'],
        releaseDate: 'March 1, 2024',
        budget: '$190,000,000',
        revenue: '$670,000,000',
        production: 'Legendary Pictures, Warner Bros.',
        language: 'English',
        keywords: ['Desert', 'Space', 'Epic', 'Adaptation', 'Sci-Fi', 'Politics']
    },
    // Add data for all other movies
};

// Search functionality
function toggleSearch() {
    const modal = document.getElementById('searchModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        document.getElementById('searchInput').focus();
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const allContent = [...contentData.trending, ...contentData.recommendations];
    const results = allContent.filter(item => 
        item.title.toLowerCase().includes(searchTerm)
    );
    
    displaySearchResults(results);
    searchResults.style.display = 'block';
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    resultsContainer.innerHTML = results.map(item => `
        <div class="content-card" onclick="window.location.href='${item.path}'">
            <img src="${item.image}" alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.year}</p>
            </div>
        </div>
    `).join('');
}

// Update the search results styling
const searchStyle = document.createElement('style');
searchStyle.textContent = `
    .search-results {
        background: rgba(18, 18, 18, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        max-height: 70vh;
        overflow-y: auto;
        margin-top: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .search-results .content-card {
        display: flex;
        align-items: center;
        padding: 12px;
        margin-bottom: 8px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid transparent;
        aspect-ratio: 1/0.32;
    }

    .search-results .content-card:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .search-results .content-card img {
        width: 80px;
        height: 120px;
        border-radius: 6px;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .search-results .card-info {
        margin-left: 15px;
        flex-grow: 1;
    }

    .search-results .card-info h3 {
        color: #fff;
        font-size: 1.1rem;
        margin: 0 0 8px 0;
        font-weight: 500;
    }

    .search-results .card-info p {
        color: #888;
        font-size: 0.9rem;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .search-results .card-info p::before {
        content: '🎬';
        margin-right: 5px;
    }

    .no-results {
        padding: 30px;
        text-align: center;
        color: #888;
        font-size: 0.95rem;
    }

    .search-results::-webkit-scrollbar {
        width: 8px;
    }

    .search-results::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    .search-results::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        transition: background 0.3s ease;
    }

    .search-results::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 768px) {
        .search-results {
            max-height: 60vh;
            margin-top: 10px;
        }

        .search-results .content-card {
            padding: 8px;
        }

        .search-results .content-card img {
            width: 60px;
            height: 90px;
        }

        .search-results .card-info h3 {
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(searchStyle);

// Add profile dropdown styling
const profileStyle = document.createElement('style');
profileStyle.textContent = `
    .profile-container {
        position: relative;
    }

    .profile-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: #111;
        border-radius: 8px;
        padding: 1rem;
        min-width: 200px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 1000;
    }

    .profile-dropdown.active {
        display: block;
        animation: fadeIn 0.3s ease;
    }

    .profile-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #222;
    }

    .profile-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .profile-dropdown a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: #fff;
        text-decoration: none;
        padding: 0.8rem;
        border-radius: 6px;
        transition: all 0.3s ease;
    }

    .profile-dropdown a:hover {
        background: #1a1a1a;
        transform: translateX(5px);
    }

    .profile-dropdown i {
        width: 20px;
        color: #e50914;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(profileStyle);

// Add profile toggle function
function toggleProfile() {
    const dropdown = document.querySelector('.profile-dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const container = document.querySelector('.profile-container');
    const dropdown = document.querySelector('.profile-dropdown');
    if (!container.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Search input event listener
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Service provider links
const serviceLinks = {
    'Prime Video': 'https://www.primevideo.com',
    'Netflix': 'https://www.netflix.com',
    'Telegram': 'https://t.me/shopinglootsafm',
    'Facebook': 'https://www.facebook.com',
    'Instagram': 'https://www.instagram.com'
};

// Service provider links and styling
const serviceStyle = document.createElement('style');
serviceStyle.textContent = `
    .service-icons {
        display: flex;
        gap: 1.5rem;
        padding: 2rem 0;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }

    .service-icons img {
        cursor: pointer;
        transition: all 0.3s ease;
        width: 48px;
        height: 48px;
        padding: 10px;
        border-radius: 12px;
        object-fit: contain;
        background: #000000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    /* Prime Video Styling */
    .service-icons img[alt="Prime Video"] {
        filter: brightness(1.2);
        box-shadow: 0 4px 15px rgba(0, 136, 204, 0.2);
    }

    .service-icons img[alt="Prime Video"]:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 136, 204, 0.4);
        filter: brightness(1.4);
        background: #111111;
    }

    /* Netflix Styling */
    .service-icons img[alt="Netflix"] {
        filter: brightness(1.2);
        box-shadow: 0 4px 15px rgba(229, 9, 20, 0.2);
    }

    .service-icons img[alt="Netflix"]:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 20px rgba(229, 9, 20, 0.4);
        filter: brightness(1.4);
        background: #111111;
    }

    /* Telegram Styling */
    .service-icons .telegram-icon {
        filter: brightness(1.2);
        box-shadow: 0 4px 15px rgba(0, 136, 204, 0.2);
    }

    .service-icons .telegram-icon:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 136, 204, 0.4);
        filter: brightness(1.4);
        background: #111111;
    }

    /* Facebook Styling */
    .service-icons img[alt="Facebook"] {
        filter: brightness(1.2);
        box-shadow: 0 4px 15px rgba(24, 119, 242, 0.2);
    }

    .service-icons img[alt="Facebook"]:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 20px rgba(24, 119, 242, 0.4);
        filter: brightness(1.4);
        background: #111111;
    }

    /* Instagram Styling */
    .service-icons img[alt="Instagram"] {
        filter: brightness(1.2);
        box-shadow: 0 4px 15px rgba(225, 48, 108, 0.2);
    }

    .service-icons img[alt="Instagram"]:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 6px 20px rgba(225, 48, 108, 0.4);
        filter: brightness(1.4);
        background: #111111;
    }

    @media (max-width: 768px) {
        .service-icons {
            gap: 1rem;
            padding: 1rem 0;
        }

        .service-icons img {
            width: 40px;
            height: 40px;
            padding: 8px;
        }
    }
`;
document.head.appendChild(serviceStyle);

// Add click handlers to service icons
document.querySelectorAll('.service-icons img').forEach(icon => {
    const service = icon.getAttribute('alt');
    if (serviceLinks[service]) {
        icon.addEventListener('click', () => {
            window.open(serviceLinks[service], '_blank');
        });
    }
});

// Update recommendations based on selected services
function updateRecommendations() {
    const selectedServices = Array.from(document.querySelectorAll('.service-icons img.selected'))
        .map(img => img.alt);
    
    // In a real application, you would fetch recommendations based on selected services
    // For now, we'll just show/hide the existing recommendations
    const recommendationsSection = document.querySelector('.recommendations');
    recommendationsSection.style.display = selectedServices.length > 0 ? 'block' : 'none';
}

// Navigation handling
function handleNavigation() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// My List functionality
const myList = {
    items: JSON.parse(localStorage.getItem('myList')) || [],

    add: function(item) {
        if (!this.items.find(i => i.id === item.id)) {
            this.items.push(item);
            this.save();
            this.updateUI();
        }
    },

    remove: function(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.save();
        this.updateUI();
    },

    save: function() {
        localStorage.setItem('myList', JSON.stringify(this.items));
    },

    updateUI: function() {
        const myListGrid = document.getElementById('myListGrid');
        if (myListGrid) {
            myListGrid.innerHTML = this.items.map(item => `
                <div class="content-card">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-info">
                        <h3>${item.title}</h3>
                        ${item.year ? `<p>${item.year}</p>` : ''}
                    </div>
                    <button class="remove-btn" onclick="myList.remove(${item.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
        }
    }
};

// Add to My List functionality for content cards
function addToMyList(contentId, section) {
    const item = contentData[section].find(item => item.id === contentId);
    if (item) {
        myList.add(item);
        showNotification('Added to My List');
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    // Create or get overlay
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', toggleMobileMenu);
    }
    
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

// Close mobile menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.querySelector('.menu-overlay');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Keep the back button functionality
function handleBackNavigation() {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.referrer.includes(window.location.host)) {
                window.history.back();
            } else {
                window.location.href = '../index.html';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize back button
    handleBackNavigation();

    // Initialize movie interaction buttons
    const interactionButtons = document.querySelectorAll('.interaction-buttons button');
    interactionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Initialize "More" button for synopsis
    const moreBtn = document.querySelector('.more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            const synopsis = this.parentElement;
            synopsis.classList.toggle('expanded');
            this.textContent = synopsis.classList.contains('expanded') ? 'Less' : 'More';
        });
    }

    // Initialize watch buttons
    const watchButtons = document.querySelectorAll('.watch-btn');
    watchButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('primary')) {
                alert('Starting playback...');
            } else {
                alert('Opening trailer...');
            }
        });
    });

    // Close search modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.getElementById('searchModal').style.display = 'none';
        }
    });

    // Add navigation buttons for the slider
    const slider = document.querySelector('.content-slider');
    
    // Add scroll buttons
    const scrollLeft = document.createElement('button');
    scrollLeft.className = 'slider-nav slider-prev';
    scrollLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const scrollRight = document.createElement('button');
    scrollRight.className = 'slider-nav slider-next';
    scrollRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    slider.parentElement.appendChild(scrollLeft);
    slider.parentElement.appendChild(scrollRight);
    
    // Scroll functionality
    scrollLeft.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRight.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    handleNavigation();
    myList.updateUI();
    
    // Add click handlers to content cards
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const contentId = parseInt(card.dataset.id);
            const section = card.closest('section').classList.contains('trending') ? 'trending' : 'recommendations';
            addToMyList(contentId, section);
        });
    });

    // Handle escape key for mobile menu
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

function generateRelatedMoviesHTML(relatedMovies) {
    return relatedMovies.map(movie => `
        <div class="movie-card" onclick="location.href='movies/${movie.id}.html'">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-card-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span class="year">${movie.year}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Add movie thumbnail styling
const movieStyle = document.createElement('style');
movieStyle.textContent = `
    .content-card {
        position: relative;
        transition: all 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        background: #000000;
    }

    .content-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
        filter: brightness(0.9);
    }

    .content-card:hover {
        transform: translateY(-3px) scale(1.02);
    }

    .content-card:hover img {
        filter: brightness(1.2);
        background: #111111;
    }

    /* Trending Section */
    .trending .content-card {
        box-shadow: 0 4px 15px rgba(229, 9, 20, 0.2);
    }

    .trending .content-card:hover {
        box-shadow: 0 6px 20px rgba(229, 9, 20, 0.4);
    }

    /* Recommended Section */
    .recommendations .content-card {
        box-shadow: 0 4px 15px rgba(0, 136, 204, 0.2);
    }

    .recommendations .content-card:hover {
        box-shadow: 0 6px 20px rgba(0, 136, 204, 0.4);
    }

    .content-card .card-info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        transition: all 0.3s ease;
    }

    .content-card .card-info h3 {
        color: #ffffff;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .content-card:hover .card-info h3 {
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        .content-card .card-info {
            padding: 8px;
        }

        .content-card .card-info h3 {
            font-size: 0.8rem;
        }
    }
`;
document.head.appendChild(movieStyle);

// Add footer styling
const footerStyle = document.createElement('style');
footerStyle.textContent = `
    footer {
        background: #000000;
        padding: 3rem 0 1rem;
        margin-top: 4rem;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .footer-section h3 {
        color: #ffffff;
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-section ul li {
        margin-bottom: 0.8rem;
    }

    .footer-section ul li a {
        color: #999;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        display: inline-block;
    }

    .footer-section ul li a:hover {
        color: #fff;
        transform: translateX(5px);
    }

    .footer-bottom {
        max-width: 1200px;
        margin: 2rem auto 0;
        padding: 2rem 2rem 0;
        border-top: 1px solid #222;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .logo-img {
        height: 30px;
        width: auto;
    }

    .logo-text {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .footer-meta {
        display: flex;
        gap: 1rem;
    }

    .language-selector,
    .region-selector {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #111;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .language-selector:hover,
    .region-selector:hover {
        background: #222;
    }

    .language-selector i,
    .region-selector i {
        color: #999;
    }

    .language-selector select,
    .region-selector select {
        background: none;
        border: none;
        color: #fff;
        font-size: 0.9rem;
        cursor: pointer;
        outline: none;
    }

    .footer-legal {
        max-width: 1200px;
        margin: 1rem auto 0;
        padding: 0 2rem;
        text-align: center;
    }

    .legal-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }

    .legal-links a {
        color: #999;
        text-decoration: none;
        font-size: 0.8rem;
        transition: color 0.3s ease;
    }

    .legal-links a:hover {
        color: #fff;
    }

    .copyright {
        color: #666;
        font-size: 0.8rem;
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
        .footer-content {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1.5rem;
        }
    }

    @media (max-width: 768px) {
        footer {
            padding: 2rem 0 1rem;
        }

        .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
        }

        .footer-bottom {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem 1rem 0;
        }

        .footer-meta {
            flex-direction: column;
            width: 100%;
        }

        .language-selector,
        .region-selector {
            width: 100%;
            justify-content: center;
        }

        .legal-links {
            gap: 1rem;
        }
    }

    @media (max-width: 480px) {
        .footer-section h3 {
            font-size: 0.9rem;
        }

        .footer-section ul li a {
            font-size: 0.8rem;
        }

        .legal-links {
            flex-direction: column;
            gap: 0.8rem;
        }

        .legal-links a {
            font-size: 0.75rem;
        }

        .copyright {
            font-size: 0.75rem;
        }
    }
`;
document.head.appendChild(footerStyle);

// Add minimal fixes for consistent sizing
const sizeFixStyle = document.createElement('style');
sizeFixStyle.textContent = `
    .content-card {
        aspect-ratio: 2/3;
    }

    .content-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .service-icons img {
        width: 45px;
        height: 45px;
        object-fit: contain;
    }
`;
document.head.appendChild(sizeFixStyle);

// Add animated background with black base
const purpleBgStyle = document.createElement('style');
purpleBgStyle.textContent = `
    /* Animated gradient background */
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            125deg,
            #000000 0%,
            #03131A 2%,
            #000000 100%
        );
        z-index: -2;
        opacity: 0.9;
        animation: gradientMove 10s ease infinite;
        background-size: 300% 300%;
    }

    /* Glowing orbs effect */
    .bg-glow {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }

    .glow-orb {
        position: absolute;
        background: radial-gradient(circle at center, rgba(89, 45, 209, 0.3), transparent 50%);
        border-radius: 50%;
        filter: blur(40px);
        animation: orbFloat 20s infinite ease-in-out;
    }

    @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes orbFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(10%, 10%) scale(1.1); }
        50% { transform: translate(-5%, 5%) scale(0.9); }
        75% { transform: translate(5%, -10%) scale(1.05); }
    }

    /* Add subtle white sparkles */
    .sparkle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: sparkleFloat 4s infinite linear;
    }

    @keyframes sparkleFloat {
        0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(purpleBgStyle);

// Create background effects
function createBackgroundEffects() {
    // Create glow orbs container
    const glowContainer = document.createElement('div');
    glowContainer.className = 'bg-glow';
    
    // Add glow orbs
    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'glow-orb';
        orb.style.width = Math.random() * 500 + 300 + 'px';
        orb.style.height = orb.style.width;
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.animationDelay = -Math.random() * 20 + 's';
        glowContainer.appendChild(orb);
    }
    
    // Add sparkles
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 4 + 's';
        sparkle.style.opacity = Math.random() * 0.5;
        glowContainer.appendChild(sparkle);
    }
    
    document.body.appendChild(glowContainer);
}

// Initialize background effects when DOM is loaded
document.addEventListener('DOMContentLoaded', createBackgroundEffects);

// Add navbar blur effect
const navbarStyle = document.createElement('style');
navbarStyle.textContent = `
    .navbar {
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    /* Mobile menu blur effect */
    @media (max-width: 768px) {
        .nav-links {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
    }
`;
document.head.appendChild(navbarStyle); 