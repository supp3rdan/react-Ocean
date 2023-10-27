import "./Header.css"

export default function Header(){
    return <header className="header">
        <a href="/">
            <img alt="Logo da ocean" src="https://oceanbrasil.com/assets/logo.svg" alt="" />
        </a>
        <nav>
            <a href="/" className="logo-link">
                Home
            </a>
            <a href="/">
                Criar personagem
            </a>
        </nav>
    </header>
}