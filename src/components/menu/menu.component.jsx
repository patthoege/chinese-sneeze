import DirectoryItem from '../directory-item/directory-item.component';

import { MenuContainer } from './menu.styles';

const categories = [
    {
      id: 1,
      title: 't-shirts',
      "imageUrl": "https://i.pinimg.com/564x/4b/20/aa/4b20aa446eaa9144c891ed73f32c1904.jpg",
      route: 'shop/t-shirts',
    },
    {
      id: 2,
      title: 'hoodies',
      "imageUrl": "https://i.pinimg.com/564x/42/db/b7/42dbb73fc802d78adc8a3aa2eba8c36f.jpg",
      route: 'shop/hoodies',
    },
    {
      id: 3,
      title: 'bags',
      "imageUrl": "https://i.pinimg.com/564x/d8/28/83/d8288315f93ef4eb173f301f59ae2785.jpg",
      route: 'shop/bags',
    },
    {
      id: 4,
      title: 'womens',
      "imageUrl": "https://i.pinimg.com/564x/de/cb/a2/decba26000e0adfaa0a8b66d5bd21d6b.jpg",
      route: 'shop/womens',
    },
    {
      id: 5,
      title: 'mens',
      "imageUrl": "https://i.pinimg.com/564x/dc/ac/62/dcac6227bacb41dc45285ebc25b8c8e2.jpg",
      route: 'shop/mens',
    },
  ];

const Menu = () => {
    return(
        <MenuContainer>
            {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            ))}
        </MenuContainer>
    )
}

export default Menu;
