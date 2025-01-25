const fs = require('fs');
const path = require('path');

// Movie data from your app.js
const movieDetailsData = {
    'deadpool-wolverine': {
        // ... your movie data
    },
    'beetlejuice-2': {
        // ... your movie data
    }
    // ... other movies
};

// Create movies directory if it doesn't exist
if (!fs.existsSync('movies')) {
    fs.mkdirSync('movies');
}

// Generate HTML for each movie
Object.entries(movieDetailsData).forEach(([id, movie]) => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${movie.title} - StreamHub</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="movie-details-body">
    <div class="movie-container">
        <a href="javascript:history.back()" class="back-btn">
            <i class="fas fa-arrow-left"></i>
        </a>
        
        <div class="movie-content">
            <div class="movie-backdrop">
                <img src="${movie.backdrop}" alt="${movie.title} Backdrop">
                <div class="backdrop-overlay"></div>
            </div>

            <div class="movie-info">
                <div class="movie-header">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.rating}</span>
                    </div>
                    <span class="year">${movie.year}</span>
                    <span class="age-rating">${movie.ageRating}</span>
                </div>

                <div class="movie-actions">
                    <button class="watch-btn primary">
                        <i class="fas fa-play"></i> Watch Now
                    </button>
                    <button class="watch-btn secondary">
                        <i class="fas fa-film"></i> Watch Trailer
                    </button>
                </div>

                <div class="movie-genres">
                    ${movie.genres.join(' • ')}
                    <span class="duration">${movie.duration}</span>
                </div>

                <h1>${movie.title.toUpperCase()}</h1>

                <p class="synopsis">
                    ${movie.synopsis}
                    <button class="more-btn">More</button>
                </p>

                <div class="cast-section">
                    <h2>Cast & Crew</h2>
                    <div class="cast-list">
                        ${movie.cast.map(member => `
                            <div class="cast-member">
                                <img src="${member.image}" alt="${member.name}">
                                <p class="name">${member.name}</p>
                                <p class="role">${member.role}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Add the rest of your movie details structure here -->
            </div>
        </div>
    </div>
    <script src="../app.js"></script>
</body>
</html>`;

    fs.writeFileSync(
        path.join('movies', `${id}.html`),
        html
    );
}); 