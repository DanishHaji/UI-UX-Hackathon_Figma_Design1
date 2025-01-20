// Mock car data
const CarDetails = [
    {
      id: 1,
      name: 'Koenigsegg',
      type: 'Sport',
      fuel_capacity: '90L',
      transmission: 'Manual',
      seating_capacity: '2 People',
      price_per_day: '$99.00',
      image_url: 'https://example.com/koenigsegg.jpg',
      tags: ['popular'],
    },
    {
      id: 2,
      name: 'Nissan GT-R',
      type: 'Sport',
      fuel_capacity: '80L',
      transmission: 'Manual',
      seating_capacity: '2 People',
      price_per_day: '$80.00',
      original_price: '$100.00',
      image_url: 'https://example.com/nissan-gtr.jpg',
      tags: ['popular'],
    },
  ];
  
  // Mock fetch function
  function fetchCarData(category: string) {
    console.log(`Fetching cars for category: ${category}`);
    return Promise.resolve(CarDetails);
  }
  
  // Simulate CategoryPage component logic
  async function renderCategoryPage(category: string) {
    console.log(`Rendering Category Page for category: ${category}`);
    
    // Fetch car data
    const carData = await fetchCarData(category);
    
    // Render car details
    console.log(`Category: ${category.toUpperCase()} Cars`);
    carData.forEach((car) => {
      console.log(`- Name: ${car.name}`);
      console.log(`  Price: ${car.price_per_day}`);
      console.log(`  Image: ${car.image_url}`);
    });
  }
  
  // Run the simulated page rendering
  renderCategoryPage('sport');
  