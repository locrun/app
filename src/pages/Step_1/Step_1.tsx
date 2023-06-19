
import { FC } from 'react'
import { Helmet } from "react-helmet"
import ContentWrapper from 'components/ContentWrapper'
import CreateForm from 'features/CreateForm'
import ProgressBar from 'components/ProgressBar'

const Step_1: FC = () => {
  return (
    <>
      <Helmet>
        <title>Step_1</title>
      </Helmet>
      <ContentWrapper>
        <ProgressBar />
        <CreateForm />
      </ContentWrapper>
    </>
  )
}

export default Step_1