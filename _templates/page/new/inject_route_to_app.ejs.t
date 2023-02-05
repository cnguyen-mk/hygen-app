---
inject: true
to: src/App.tsx
before: </Routes>
skip_if: <Route path="/<%= route || 'newPage' %>" element={<<%= Name || 'NewPage' %> />} />
eof_last: false
---
      <Route path="/<%= route || 'newPage' %>" element={<<%= Name || 'NewPage' %> />} />
