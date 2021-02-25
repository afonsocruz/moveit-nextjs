import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/afonsocruz.png" alt="Afonso Cruz" />
            <div>
                <strong>Afonso Cruz</strong>
                <p>
                    <img src="icons/level.svg" alt="green level up arrow" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}

export default Profile;