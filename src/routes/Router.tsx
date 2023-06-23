import { FC } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import UserProfile from 'pages/UserProfile';
import Step1 from 'pages/Step_1';
import Step2 from 'pages/Step_2';
import Step3 from 'pages/Step_3';
import { path } from "../shared/constants";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PROFILE} element={<UserProfile />} />
        <Route path={path.STEP_1} element={<Step1 />} />
        <Route path={path.STEP_2} element={<Step2 />} />
        <Route path={path.STEP_3} element={<Step3 />} />
        <Route path="*" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}