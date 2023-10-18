const categoriesList = document.getElementById('categories');
    const categories = categoriesList.getElementsByClassName('item');
    console.log(`Number of categories: ${categories.length}`);

    for (const category of categories) {
      const categoryName = category.querySelector('h2').textContent;
      const elements = category.querySelectorAll('ul li');
      console.log(`\nCategory: ${categoryName}`);
      console.log(`Elements: ${elements.length}`);
    }