import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h1 className="m-3 fw-bold">CHI SONO</h1>
        <hr className="mx-3" />
        <p className="mx-3 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, enim mollitia eveniet debitis eius possimus, nemo, ipsa quod beatae cum dolores cumque maxime laudantium necessitatibus. Corrupti, iure? Quibusdam veritatis harum cumque ratione aliquid exercitationem quae adipisci odit autem rem, cupiditate deserunt accusamus, perferendis earum nobis quas sed possimus tempore magnam.</p>
      </div>
    </div>
  );
}

export default AboutMe;