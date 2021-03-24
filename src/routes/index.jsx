import React from 'react'
import { Route } from 'react-router'
import AboutUsLayout from '../Components/Layouts/AboutUsLayout'
import LoginLayout from '../Components/Layouts/Contents/LoginLayout'
import RegisterLayout from '../Components/Layouts/Contents/RegisterLayout'
import ResetPassword from '../Components/Layouts/Contents/ResetPassword'
import HomeLayout from '../Components/Layouts/HomeLayout'
import JobProviderLayout from '../Components/Layouts/JobProviderLayout'
import JobSeekerLayout from '../Components/Layouts/JobSeekerLayout'

const routesList = [
  { key: '/', value: HomeLayout },
  { key: '/register', value: RegisterLayout },
  { key: '/login', value: LoginLayout },
  { key: '/about', value: AboutUsLayout },
  { key: '/resetPassword', value: ResetPassword },
  { key: '/provider', value: JobProviderLayout },
  { key: '/seeker', value: JobSeekerLayout },
  { key: '/test', value: ResetPassword },
]

const RoutesRoot = () => (
  <>
    {routesList.map(({ key, value }) =>
      key === '/' ? (
        <Route exact path={key} component={value} />
      ) : (
        <Route path={key} component={value} />
      )
    )}
  </>
)

export default RoutesRoot
