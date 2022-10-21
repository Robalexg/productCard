import './Card.css'

const Card = () => {
    return (
        <section className="card--container">
            <div className='card--imgContainer' >
                <img className='card--img' src="../images/image-product-desktop.jpg" alt="" />
                <img className='card--imgMobile' src="../images/image-product-mobile.jpg" alt="" />

            </div>
            <div className='card--textContainer'>
                <h2 className='card--type' >PERFUME</h2>
                <h1 className='card--title' >Gabrielle Essence Eau De Parfum</h1>
                <h3 className='card--desc' >
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the house of CHANEL.

                </h3>
                <p className='card--price' >$149.99 <span className='grey' >$169.99</span></p>
                <button className='card--button' ><img src="../images/icon-cart.svg" alt="" />Add to Cart</button>
            </div>
        </section>
    )
}

export default Card