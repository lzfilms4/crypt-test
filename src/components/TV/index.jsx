import React from 'react';
import grid from '../../assets/img/reshetka.png'
import btn from '../../assets/img/btn.png'
import btnActive from '../../assets/img/btnActive.png'
import btnNotPicked from '../../assets/img/redBtn.png'

import companty from '../../assets/img/company.png'

import num1 from '../../assets/img/popup/numbers/1.png'
import num2 from '../../assets/img/popup/numbers/2.png'
import num3 from '../../assets/img/popup/numbers/3.png'
import num4 from '../../assets/img/popup/numbers/4.png'
import num5 from '../../assets/img/popup/numbers/5.png'


import './index.scss'

const nums = [
    num1, num2, num3, num4, num5
]
const TV = ({day, setActive, setActive2, setActive3, setActive4, setActive5}) => {
    const activities = [
        setActive,
        setActive2,
        setActive3,
        setActive4,
        setActive5
    ]
    const [active, setActiveDay] = React.useState(0)
    const [available, setAvailable] = React.useState(3)
    return (
        <div className='TV'>
            <div className='bg'></div>
            <div className={'window-bg' + " gif" + active.toString()} ></div>
            <div className='window'>
                {active === 6 ? (<div className="info">
                    <div className="info-count">
                        <div className="info-count-name">Призовой фонд</div>
                        <div className="info-count-price"></div>
                    </div>
                    <a href='https://crypton2023cryptus.com/'>
                        <div className="button">
                            <div className="button-text">Правила и условия</div>
                            <div className="button-arrow"></div>
                        </div>
                    </a>
                    <div className="support">При поддержке</div>
                    <div className="all-supports">
                        <div className='line1'>
                            <div className="line">
                               <a href='https://trustwallet.com/'><div className="logo1"></div></a>
                            </div>
                            <div className="line">
                                <a href='https://beta.dequest.io/quests'> <div className="logo2"></div></a>
                            </div>
                        </div>
                        <div className="line2">
                            <a href='https://impossible.finance/'> <div className="logo3"></div></a>
                        </div>
                    </div>
                </div>) : (
                        <div className='actionBtn' onClick={() => activities[active](true)}>
                            <div className='bg'></div>
                            <div className='bgHover'></div>
                            <div className='actionBtn-text'>День {active+1}</div>
                        </div>
                )
                }


            </div>
            <div className='buttons'>
                <div className='reshetka'>
                    <img src={grid} alt=""/>
                </div>
                <div className='btns'>
                    {[...new Array(5)].map((e,i) => (
                        <div key={i} className='channel'>
                            <img
                                src={active === i ? btnActive : (i <= day-1) ? btnNotPicked : btn} onClick={()=> i <= day-1 ? setActiveDay(i) : ''}
                                alt=""/>
                            {/*<span>{i+1}</span>*/}
                            <img src={nums[i]} className={"num"+i.toString()} alt=""/>
                        </div>
                    ))}
                </div>
                <div className={active!==6? 'info' : 'info active'} onClick={()=> setActiveDay(6)}>
                    <div>INFO</div>
                </div>
            </div>
        </div>
    )
}

export default TV;