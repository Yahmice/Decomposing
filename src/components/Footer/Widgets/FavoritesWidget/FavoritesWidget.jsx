import Title from '../common/Title/Title';
import DefinitionList from '../common/Lists/DefinitionList'
export default function FavoritesWidget({ title, items }) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionList items={items} />
    </div>
  );
}