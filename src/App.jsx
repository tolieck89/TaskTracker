import './App.css'
import Content from './components/theme/Content'
import AuthProvider from './components/providers/AuthProvider'
import LanguageProvider from './components/providers/LanguageProvider'
import ThemeProvider from './components/providers/ThemeProvider'
import Navigation from './components/Navigation'


function App() {



 
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation />
        
        <AuthProvider>

         <Content />

        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>

  )
}

export default App
  