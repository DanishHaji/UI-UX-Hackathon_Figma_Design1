// Mock car data
const Carlist = [
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
  
  // Mock fetch function to simulate fetching car data
  function fetchCarList(category: string) {
    console.log(`Fetching cars for category: ${category}`);
    return Promise.resolve(Carlist);
  }
  
  // Simulate Car List Page rendering logic
  async function renderCarListPage(category: string) {
    console.log(`Rendering Car List Page for category: ${category}`);
    
    // Fetch car data
    const carData = await fetchCarList(category);
    
    // Display the category and car details
    console.log(`Category: ${category.toUpperCase()} Cars List`);
    carData.forEach((car) => {
      console.log(`- Name: ${car.name}`);
      console.log(`  Type: ${car.type}`);
      console.log(`  Price: ${car.price_per_day}`);
      console.log(`  Image: ${car.image_url}`);
    });
  }
  
  // Run the simulated car list page rendering
  renderCarListPage('sport');
  