const App = () => {

  const categories = [
    {
      id: 1,
      title: 'T-Shirts',
    },
    {
      id: 2,
      title: 'Hoodies',
    },
    {
      id: 3,
      title: 'Bags',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ]

  return (
    <div className='categories-container'>
    {categories.map(({title}) => (
      <div className='category-container'>
         <div className='background-image' />
         <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
         </div>
      </div>
    ))}
    </div>
  );
};

export default App;
