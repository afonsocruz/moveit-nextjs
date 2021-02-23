import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/afonsocruz.png" alt="Afonso Cruz" />
            <div>
                <strong>Afonso Cruz</strong>
                <p>
                    <img src="icons/level.svg" alt="green level up arrow" />
                    Level 1
                </p>
            </div>
        </div>
    )
}

export default Profile;