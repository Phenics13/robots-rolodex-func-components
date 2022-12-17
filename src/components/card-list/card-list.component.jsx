import './card-list.styles.css';
import '../card/card.component';
import Card from "../card/card.component";

const CardList = ({ filteredRobots }) => {
    return (
        <div className="card-list">
            {filteredRobots.length
                ?
                filteredRobots.map(robot => {
                    return <Card robot={robot} key={robot.id} />
                })
                :
                <h1 className="not-found">No Robots found!</h1>
            }
        </div>
    );
}

export default CardList;