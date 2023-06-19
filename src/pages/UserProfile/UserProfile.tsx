import ContentWrapper from 'components/ContentWrapper';
import Profile from 'components/Profile';
import UserProfileForm from 'features/UserProfileForm';
import { FC } from 'react'
import { Helmet } from "react-helmet"

const UserProfile: FC = () => {
  return (
    <ContentWrapper style={{ padding: "25px", minHeight: "704px" }}>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Profile />
      <UserProfileForm />
    </ContentWrapper>
  )
}

export default UserProfile;