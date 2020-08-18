import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <div className="checkout__ad">
                <img 
                    className="checkout__ad_img" 
                    src="https://www.computerhilfen.de/news/wp-content/uploads/2018/10/amaon-prime-kreditkarte.jpg" 
                    alt="" 
                />
                <p className="checkout__ad_text">
                    <b>Enis</b>, wussten Sie, dass Sie mit der <b>Amazon.de VISA Karte</b> in den letzten 12 Monaten 
                    <br/>3.723 Bonuspunkte (entspricht EUR 37,23) hätten verdienen können? 
                    <br/>Außerdem erhalten Sie derzeit <b>40 € Startgutschrift</b> für die Amazon.de VISA Karte.
                </p>
            </div>

            {
                basket?.length === 0 ? (
                    <div className="checkout__basket">
                        <h2>Dein Einkaufswagen ist leer</h2>
                        <p>
                            <small>
                                Sie haben aber Artikel für einen späteren Kauf gespeichert. 
                                Wenn Sie einen oder mehrere Artikel jetzt kaufen möchten, 
                                klicken Sie auf die Schaltfläche "In den Warenkorb" neben dem gewünschten Artikel.
                            </small>
                        </p>
                    </div>
                ) : (
                    <div className="checkout__basket">
                        <h2>Dein Einkaufswagen</h2><br/>
                        {
                            basket.map(item =>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
