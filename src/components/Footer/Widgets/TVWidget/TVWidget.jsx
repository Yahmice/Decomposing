import Title from '../common/Title/Title';
import TVProgramList from '../common/Lists/TVProgramList'
export default function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramList items={items} />
    </div>
  );
}