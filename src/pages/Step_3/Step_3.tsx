import { FC } from 'react'
import { Helmet } from "react-helmet"
import ContentWrapper from 'components/ContentWrapper'
import ProgressBar from 'components/ProgressBar'
import AboutMeForm from 'features/AboutMeForm'

const Step_3: FC = () => {
  return (
    <ContentWrapper>
      <Helmet>
        <title>Step_3</title>
      </Helmet>
      <ProgressBar />
      <AboutMeForm />
    </ContentWrapper>
  )
}
export default Step_3