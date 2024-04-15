import Menu from "./components/menu/menu.component";

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'T-Shirts',
      "imageUrl": "https://i.pinimg.com/564x/4b/20/aa/4b20aa446eaa9144c891ed73f32c1904.jpg"
    },
    {
      id: 2,
      title: 'Hoodies',
      "imageUrl": "https://i.pinimg.com/564x/42/db/b7/42dbb73fc802d78adc8a3aa2eba8c36f.jpg"
    },
    {
      id: 3,
      title: 'Bags',
      "imageUrl": "https://i.pinimg.com/564x/d8/28/83/d8288315f93ef4eb173f301f59ae2785.jpg"
    },
    {
      id: 4,
      title: 'Womens',
      "imageUrl": "https://i.pinimg.com/564x/de/cb/a2/decba26000e0adfaa0a8b66d5bd21d6b.jpg"
    },
    {
      id: 5,
      title: 'Mens',
      "imageUrl": "https://i.pinimg.com/564x/dc/ac/62/dcac6227bacb41dc45285ebc25b8c8e2.jpg"
    },
  ];

  return (
    <Menu categories={categories} />
  );
};

export default App;
