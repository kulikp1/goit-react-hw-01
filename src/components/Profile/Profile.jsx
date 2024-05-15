import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.personalInfo}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.figures}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.figures}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.figures}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;