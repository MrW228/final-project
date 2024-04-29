import React from 'react'
import FirstSection from '../components/FirstSection'
import BestSell from '../components/BestSell'
import Utenim from '../components/Utenim'
import Rich from '../components/Rich'
import Ingredi from '../components/Ingredi'
import Learn from '../components/Learn'
import Refer from '../components/Refer'
import Join from '../components/Join'
import Cocktails from '../components/Cocktails'
import Slider from '../components/Slider'
function HomePage() {
    return (
        <div className='HomePage'>
            <div className="container">
                <FirstSection />
                <BestSell />
                <Utenim />
                <Slider />
                <Rich />
                <Ingredi />
                <Learn />
                <Refer />
                <Join />
                <Cocktails />
            </div>

        </div>
    )
}

export default HomePage
