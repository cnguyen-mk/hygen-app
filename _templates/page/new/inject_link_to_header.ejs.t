---
inject: true
to: src/components/Header/index.tsx
before: </ul>
skip_if: <Link to={'/<%= route || 'newPage' %>'}><%= name || 'newPage' %></Link>
eof_last: false
---
          <li>  
            <Link to={'/<%= route || 'newPage' %>'}><%= name || 'newPage' %></Link>
          </li>
