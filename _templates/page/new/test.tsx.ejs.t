---
to: src/pages/<%= Name || 'NewPage' %>/__tests__/<%= Name %>.cy.tsx
---
import <%= Name %> from '..'

it('mounts', () => {
  cy.mount(<<%= Name %> />)
})
