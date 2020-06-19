import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './menu.scss';

const Menu = () => {
    return (
        <nav>
            <div className="content__nav">
                <h3>Typescript</h3>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to='#variaveis'>
                                Variáveis
                            </Link>
                        </li>
                    </ul>
                </BrowserRouter>
            </div>
        </nav>
    );
}

export default Menu;