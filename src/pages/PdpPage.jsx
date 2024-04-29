import React from 'react'
import Quantity from '../components_pdpPage/Quantity'
import Accordion from '../components_pdpPage/Accordion'
import Ingredients from '../components_pdpPage/Ingredients'
import Enjoy from '../components_pdpPage/Enjoy'
import Tom from '../components_pdpPage/Tom'
import Rich2 from '../components_pdpPage/Rich2'
import Cocktails from '../components/Cocktails'
import Join from '../components/Join'
import Accordion2 from '../components_pdpPage/Accordion2'
import Soctails from '../components_pdpPage/Soctails'


function PdpPage() {
    return (
        <div className='pdppage'>
            <div className="container">
                <Quantity />
                <Accordion />
                <Ingredients />
                <Enjoy />
                <Tom />
                <Rich2 />
                <Accordion2 />
                <Soctails />
                <Join />
                <Cocktails />

            </div>

        </div>
    )
}

export default PdpPage
