document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const searchHistoryList = document.getElementById('searchHistory');


    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  
    function updateSearchHistory() {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            searchHistoryList.appendChild(li);
        });
    }

  
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            updateSearchHistory();
            searchInput.value = ''; 
        }
    });

    
    clearHistoryBtn.addEventListener('click', function() {
        localStorage.removeItem('searchHistory');
        searchHistory.length = 0; 
        updateSearchHistory();
    });

    
    updateSearchHistory();
});