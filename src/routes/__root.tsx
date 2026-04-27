import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { I18nProvider } from '../i18n/I18nContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { SettingsProvider } from '../contexts/SettingsContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <I18nProvider>
      <SettingsProvider>
        <Header />
        <Outlet />
        <Footer />
      </SettingsProvider>
    </I18nProvider>
  )
}
