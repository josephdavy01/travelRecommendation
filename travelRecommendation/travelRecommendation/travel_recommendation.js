document.addEventListener('DOMContentLoaded', () => {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check if data is fetched correctly
            displayRecommendations(data);
        })
        .catch(error => console.error('Error fetching the data:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', handleSearch);
    
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', clearResults);
});

const dataa = [
    {
        id: 1,
        name: "Bondi Beach",
        category: "beach",
        description: "Bondi Beach is a popular beach and the name of the surrounding suburb in Sydney, Australia.",
        imageUrl: "bondi_beach.jpg"
    },
    {
        id: 2,
        name: "Waikiki Beach",
        category: "beach",
        description: "Waikiki Beach is an iconic beach located on the south shore of Honolulu in Hawaii.",
        imageUrl: "waikiki_beach.jpg"
    },
    {
        id: 3,
        name: "Angkor Wat",
        category: "temple",
        description: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world.",
        imageUrl: "angkor_wat.jpg"
    },
    {
        id: 4,
        name: "Borobudur",
        category: "temple",
        description: "Borobudur is a 9th-century Mahayana Buddhist temple in Magelang Regency, not far from the town of Muntilan, in Central Java, Indonesia.",
        imageUrl: "borobudur.jpg"
    },
    {
        id: 5,
        name: "Paris",
        category: "country",
        description: "Paris, France's capital, is a major European city and a global center for art, fashion, and culture.",
        imageUrl: "paris.jpg"
    },
    {
        id: 6,
        name: "Japan",
        category: "country",
        description: "Japan is an island country in East Asia, located in the northwest Pacific Ocean.",
        imageUrl: "japan.jpg"
    }
];

function handleSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const searchKeywords = {
        beach: ['beach', 'beaches'],
        temple: ['temple', 'temples'],
        country: ['country', 'countries']
    };

    let matchedCategory = null;

    for (const category in searchKeywords) {
        if (searchKeywords[category].includes(searchInput)) {
            matchedCategory = category;
            break;
        }
    }

    if (matchedCategory) {
        const filteredResults = data.filter(item => item.category === matchedCategory);
        displayResults(filteredResults);
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    results.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const image = document.createElement('img');
        image.src = `images/${item.imageUrl}`;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        resultDiv.appendChild(image);
        resultDiv.appendChild(name);
        resultDiv.appendChild(description);
        resultsContainer.appendChild(resultDiv);
    });
}

function clearResults() {
    const resultsContainer = document.getElementById('results-container');
    const searchInput = document.getElementById('search-input');
    resultsContainer.innerHTML = '';
    searchInput.value = '';
}


function displayRecommendations(data) {
    const container = document.getElementById('recommendations-container');

    data.forEach(item => {
        const recommendation = document.createElement('div');
        recommendation.classList.add('recommendation');

        const image = document.createElement('img');
        image.src = `images/${item.imageUrl}`; // Assuming your images are in an 'images' directory
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        recommendation.appendChild(image);
        recommendation.appendChild(name);
        container.appendChild(recommendation);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', handleSearch);
});

const data = [
    {
        id: 1,
        name: "Paris",
        category: "country",
        imageUrl: "paris.jpg"
    },
    {
        id: 2,
        name: "Bondi Beach",
        category: "beach",
        imageUrl: "bondi_beach.jpg"
    },
    {
        id: 3,
        name: "Angkor Wat",
        category: "temple",
        imageUrl: "angkor_wat.jpg"
    }
    // Add more travel data as needed
];

function handleSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    const searchKeywords = {
        beach: ['beach', 'beaches'],
        temple: ['temple', 'temples'],
        country: ['country', 'countries']
    };

    let matchedCategory = null;

    for (const category in searchKeywords) {
        if (searchKeywords[category].includes(searchInput)) {
            matchedCategory = category;
            break;
        }
    }

    if (matchedCategory) {
        const filteredResults = data.filter(item => item.category === matchedCategory);
        displayResults(filteredResults);
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    results.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const image = document.createElement('img');
        image.src = `images/${item.imageUrl}`;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        resultDiv.appendChild(image);
        resultDiv.appendChild(name);
        resultsContainer.appendChild(resultDiv);
    });
}
