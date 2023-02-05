---
inject: true
to: src/App.tsx
after: import Home from './pages/Home'
skip_if: import <%= Name || 'NewPage' %> from './pages/<%= Name || 'NewPage' %>'
eof_last: false
---
import <%= Name || 'NewPage' %> from './pages/<%= Name || 'NewPage' %>'
