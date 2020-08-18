import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Gesamtbetrag ({basket.length} Artiket: <strong>{value}</strong>)
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> Die Bestellung enthält ein Geschenk.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button>Zur Kasse gehen</button>
        </div>
    )
}

export default Subtotal
