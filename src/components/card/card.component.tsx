import { Robot } from '../../App';

import './card.styles.css';

type CardProps = {
    robot: Robot;
}

const Card = ({ robot }: CardProps) => {
    const { id, name, email } = robot;
    return (
        <div className='card'>
            <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;