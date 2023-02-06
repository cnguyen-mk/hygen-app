---
inject: true
to: src/components/Header/index.tsx
before: </Box>
after: </StyledLink>
skip_if: <StyledLink to={'/<%= route || 'newPage' %>'}><%= name || 'newPage' %></StyledLink>
eof_last: false
---
            <StyledLink component={RouterLink} to={'/<%= route || 'newPage' %>'}><%= name || 'newPage' %></StyledLink>
