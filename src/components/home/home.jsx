import React from 'react';

import './home.scss';

const Home = () => {
    return (
        <section>
            <div className="content__home">
                <div className="home--header">
                    <h1>Typescript</h1>
                    <p>
                        É um superset do Javascript. Basicamente, tem uma tipagem estática!
                    </p>
                    <a href="https://www.notion.so/TypeScript-500a4f3ce12442f98716e26eac857c6d" target="_black">
                        <span role="img" aria-label="icon book">📙</span> Notion
                    </a>
                </div>
                <div className="home--body">
                    <div>
                        <h2>Variáveis</h2>
                        <p>Exite alguns tipos de vairiáveis, como por exemplo: boolean, string, number .</p>
                    </div>
                    <div className="home--coding">
                        <div>
                            <p className="code"><span>let</span> message: <span>string</span></p>
                            <p className="commit">
                                <span>//</span>
                                string ("foo", 'foo', `foo`)
                            </p>
                        </div>
                        <div>
                            <p className="code"><span>let</span> total: <span>number</span></p>
                            <p className="commit">
                                <span>//</span>
                                string (int, float, hex, binary)
                            </p>
                        </div>
                        <div>
                            <p className="code"><span>let</span> isOpen: <span>boolean</span></p>
                            <p className="commit">
                                <span>//</span>
                                boolean (true/false)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home--code">
                <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js" data-user="Alessandra-Nastassja" data-slug-hash="YzwpjYo" data-pen-title="message">
                </p>
                </div>
            </div>
        </section>
    );
}

export default Home;