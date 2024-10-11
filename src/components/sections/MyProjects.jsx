import styles from './MyProjects.module.css';
import TravelNestVideo from '../../assets/images/TravelNest_Presentazione.mp4'; // Import diretto del video

const MyProjects = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">MY PROJECTS</h1>
        <hr className="mx-3" />
        <div className="m-3">
          <h2 className="text-center mt-5"><a href='https://github.com/AlessandroB92/react-portfolio' target='blank'>TravelNest</a></h2>
          <video width="400" controls>
            <source src={TravelNestVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
