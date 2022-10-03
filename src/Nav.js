import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
<nav>
          <ul>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/teams`}>Teams</a>
            </li>
          </ul>
        </nav>

);


export default Nav;