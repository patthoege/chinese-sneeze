import DirectoryItem from '../directory-item/directory-item.component';

import { MenuContainer } from './menu.styles';

const Menu = ({categories}) => {
    return(
        <MenuContainer>
            {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
            ))}
        </MenuContainer>
    )
}

export default Menu;
