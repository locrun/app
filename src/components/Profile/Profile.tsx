import { FC } from 'react'
import { Link } from 'react-router-dom'
import IconSvg from 'components/IconSvg'
import s from "./Profile.module.scss"


const links = [
  { title: "Telegram", href: "" },
  { title: "GitHub", href: "" },
  { title: "Resume", href: "" }
]

const Profile: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <span>Р</span>
        <span>Н</span>
      </div>
      <div>
        <h3 className={s.person}>Рунар Назмутдинов</h3>
        <ul className={s.list}>
          {
            links.map((item) => {
              return (
                <li key={item.title} className={s.listItem}>
                  <IconSvg id="#folder" className={s.folder} />
                  <Link
                    to={item.href} className={s.link} target="_blank">
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Profile;
