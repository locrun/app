import Profile from 'components/Profile';
import UserProfileForm from 'features/UserProfileForm';
import { FC } from 'react'
import { Helmet } from "react-helmet"

const UserProfile: FC = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="main">
        <Profile />
        <UserProfileForm />
      </div>
    </>
  )
}

export default UserProfile;