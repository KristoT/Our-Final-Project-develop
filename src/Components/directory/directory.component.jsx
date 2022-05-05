import DirectoryItem from '../directory-item/directory-item.component';
import Women from '../../images/women.png'
import Mens from '../../images/mens.png'
import Kids from '../../images/kids.png'

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Women',
    imageUrl: {Women},
    route: 'shop/women',
  },
  {
    id: 2,
    title: 'men',
    imageUrl: {Mens},
    route: 'shop/men',
  },
  {
    id: 3,
    title: 'kids',
    imageUrl: {Kids},
    route: 'shop/kids',
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
