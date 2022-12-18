import React from 'react';
import grid from '../../assets/img/reshetka.png'
import btn from '../../assets/img/btn.png'
import btnActive from '../../assets/img/btnActive.png'
import btnNotPicked from '../../assets/img/redBtn.png'

import companty from '../../assets/img/company.png'

import reshetka from '../../assets/img/reshetka.png'

import './index.scss'

const links = [
    'https://ya.ru',
    'https://google.com',
    'https://ya.ru',
    'https://ya.ru',
    'https://ya.ru',
]

const TV = () => {
    const [active, setActive] = React.useState(0)
    const [available, setAvailable] = React.useState(3)

    return (
        <div className='TV'>
            <div className='bg'></div>
            <div className='window-bg'></div>
            <div className='window'>
                {active === 6 ? (<div className="info">
                    <div className="info-count">
                        <div className="info-count-name">Призовой фонд</div>
                        <div className="info-count-price"></div>
                    </div>
                    <a href='https://music.yandex.ru/'>
                        <div className="button">
                            <div className="button-text">Правила и условия</div>
                            <div className="button-arrow"></div>
                        </div>
                    </a>
                    <div className="support">При поддержке</div>
                    <div className="all-supports">
                        <div className="line">
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                        </div>
                        <div className="line">
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                            <div className="sup">
                                <img src={companty} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>) : (
                    <a href={links[active]}>
                        <div className='actionBtn'>
                            <div className='bg'></div>
                            <div className='bgHover'></div>
                            <div className='actionBtn-text'>День {active+1}</div>
                        </div>
                    </a>
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
                                src={active === i ? btnActive : (i <= available-1) ? btnNotPicked : btn} onClick={()=> i <= available-1 ? setActive(i) : ''}
                                alt=""/>
                            <span>{i+1}</span>
                        </div>
                    ))}
                </div>
                <div className={active!==6? 'info' : 'info active'} onClick={()=> setActive(6)}>
                    <div>INFO</div>
                </div>
            </div>
        </div>
    )
}

export default TV;