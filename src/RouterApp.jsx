import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const RouterApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
