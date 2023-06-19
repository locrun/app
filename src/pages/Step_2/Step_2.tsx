import { FC } from 'react';
import { Helmet } from "react-helmet";
import ContentWrapper from 'components/ContentWrapper';
import ProgressBar from 'components/ProgressBar';
import AdvForm from 'features/AdvfForm.tsx';

const Step_2: FC = () => {
  return (
    <>
      <Helmet>
        <title>Step_2</title>
      </Helmet>
      <ContentWrapper>
        <ProgressBar />
        <AdvForm />
      </ContentWrapper>
    </>
  )
}
export default Step_2;