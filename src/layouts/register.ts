import { App } from 'vue'
import { ModuleNamespace } from 'vite/types/hot.js'

export function registerLayouts(app: App<Element>) {
  const layouts = import.meta.glob<ModuleNamespace>('./*.vue', {
    eager: true
  })

  Object.entries(layouts).forEach(([, layout]) => {
    app.component(layout?.default?.name, layout?.default);
  });
}