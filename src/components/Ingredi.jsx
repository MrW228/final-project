import React from 'react'
import '../style/Ingredi.css'
import plant from '../image/earl gray.png'
import rose2 from '../image/rose 1.png'
import pear from '../image/pear 1.png'
import birch from '../image/birch-tree 1.png'
import curr from '../image/black-currant 1.png'
import bergam from '../image/bergamot 1.png'
import '../App.css'
 

function Ingredi() { 
    return (
        <div className='ingredi'>
            <div className="ing">
                <h1>Ingredients</h1>
              
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="">INGREDIENT GLOSSARY</a>
            </div>
            <div className="wrap">
                <div className="card2">
                    <img src={plant} alt="" />
                    <h3>EARL GRAY</h3>
                </div>
                <div className="card2">
                    <img src={rose2}alt="" />
                    <h3>ROSE</h3>
                </div>
                <div className="card2">
                    <img src={pear} alt="" />
                    <h3>PEAR</h3>
                </div>
                <div className="card2">
                    <img src={birch} alt="" />
                    <h3>BIRCH</h3>
                </div>
                <div className="card2">
                    <img src={curr} alt="" />
                    <h3>BLACK CURRANT</h3>
                </div>
                <div className="card2">
                    <img src={bergam} alt="" />
                    <h3>BERGAMOT</h3>
                </div>


                
            </div>
        </div>
    )
}

export default Ingredi
