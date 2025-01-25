const fs = require('fs');
const path = require('path');

// Read the template file
const template = fs.readFileSync('movie-details-template.html', 'utf8');

// For each movie in movieDetailsData
Object.entries(movieDetailsData).forEach(([id, movie]) => {
    let moviePage = template;
    
    // Replace template variables with movie data
    moviePage = moviePage.replace('${movie.title}', movie.title);
    // ... replace other variables
    
    // Write the file
    fs.writeFileSync(
        path.join('movies', `${id}.html`),
        moviePage
    );
}); 