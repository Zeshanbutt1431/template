import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <h1>Logo</h1>
            <p>Notification / Discount offer text goes here.</p>
            <div className="header-actions">
                <div className="search">Search</div>
                <div className="cart">cart</div>
                <div className="account">account</div>
            </div>
        </div>
    </div>
  )
}

export default Header