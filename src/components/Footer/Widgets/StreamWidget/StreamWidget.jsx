import Title from '../common/Title/Title';
import TVProgramList from '../common/Lists/TVProgramList'
export default function StreamWidget({ title, items }) {
  return (
    <div className="Stream-widget">
      <Title title={title} />
      <TVProgramList items={items} />
    </div>
  );
}