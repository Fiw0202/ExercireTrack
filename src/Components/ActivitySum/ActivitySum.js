import "./ActivitySum.css";
import ActivityCard from './ActivityCard/ActivityCard'
import Addbtn from './Add-btn/Addbtn'

const ActivitySum = (props) => {
  
const{cards} = props

  return (
    <div className="activity-sum">
      <h1>Activity Summary</h1>
      <div className="activity-times">
        {cards.map((element) => {
          return <ActivityCard {...element} key={element.id} />;
        })}
        <Addbtn />
      </div>
    </div>
  );
};
export default ActivitySum;
