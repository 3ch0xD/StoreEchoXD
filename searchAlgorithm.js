document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    const searchInput = document.getElementById('searchInput');

    function filterProducts(searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      productCards.forEach((productCard) => {
        const productTitle = productCard.querySelector('h3').textContent.toLowerCase();
        const productDisplayed = customFilter(productTitle, searchTermLower);
        productCard.style.display = productDisplayed ? 'block' : 'none';
      });
    }

    function customFilter(title, searchTerm) {
      const words = searchTerm.split(' ').filter((word) => word.length > 0);
      return words.every((word) => title.includes(word));
    }

    function searchProducts() {
      const searchTerm = searchInput.value.trim();
      filterProducts(searchTerm);
      updateURL(searchTerm);
    }

    function updateURL(searchTerm) {
      const url = new URL(window.location.href);
      url.searchParams.set('search', encodeURIComponent(searchTerm));
      window.history.replaceState({}, '', url);
    }

    
    filterProducts('');

    
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', searchProducts);

    
    searchInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        searchProducts();
      }
    });

    
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam !== null) {
      searchInput.value = decodeURIComponent(searchParam);
      filterProducts(searchParam.trim());
    }
  });