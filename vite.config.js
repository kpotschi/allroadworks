import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const INCLUDE = /<!--\s*include:(\S+?)\s*-->/g

/**
 * Inlines `<!-- include:path/to/file -->` into index.html at build/dev time, so all
 * content ships as static HTML (readable without JS, hero image discovered early).
 * Runs before Vite's own HTML processing, so asset URLs inside partials get hashed.
 * Includes may nest (e.g. a page partial including an SVG).
 */
function htmlIncludes() {
  const expand = (html, depth = 0) => {
    if (depth > 5) throw new Error('html-includes: nesting too deep')
    return html.replace(INCLUDE, (_, file) =>
      expand(readFileSync(resolve(import.meta.dirname, file), 'utf8'), depth + 1),
    )
  }

  return {
    name: 'html-includes',
    transformIndexHtml: { order: 'pre', handler: (html) => expand(html) },
    handleHotUpdate({ file, server }) {
      if (file.includes('/src/pages/') || file.includes('/src/assets/brand/')) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

export default defineConfig({
  plugins: [htmlIncludes(), tailwindcss()],
  server: {
    port: 3000,
  },
  base: '/',
})
