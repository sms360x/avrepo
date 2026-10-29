import DefaultTheme from 'vitepress/theme'
import './custom.css'
import WikiPortal from './components/WikiPortal.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WikiPortal', WikiPortal)
  }
}
