import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.father}>
      <div className={css.children}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.nameParagraf}>{name}</p>
        <p className={css.tagLocParagraf}>@{tag}</p>
        <p className={css.tagLocParagraf}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.li}>
          <span className={css.span}>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.descendantLiBorder}>
          <span className={css.span}>Views</span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
