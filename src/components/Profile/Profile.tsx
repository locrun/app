import { FC } from 'react'
import { Link } from 'react-router-dom'
import IconSvg from 'components/IconSvg'
import s from "./Profile.module.scss"


const links = [
  { title: "Telegram", href: "https://t.me/runar_n" },
  { title: "GitHub", href: "https://github.com/locrun" },
  { title: "Resume", href: "https://kazan.hh.ru/resume/a3b27c5aff077114740039ed1f3375357a544f" }
]

const Profile: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <span>Р</span>
        <span>Н</span>
      </div>
      <div className={s.margin}>
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
