import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, ErrorPage } from '../Landing'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRoutes, PublicRoutes } from './'

const router =  createHashRouter([
    {
        path: 'login',
        element: (
            <PublicRoutes>
                <LoginPage/>
            </PublicRoutes>
        )
    },
    {
        path: "/",
        element: (
            <PrivateRoutes>
                <HomePage/>
            </PrivateRoutes>
        ),
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'contact',
                element: <ContactPage/>
            },
        ]
    }    
])


export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={ router }/>
    </>
)
}
