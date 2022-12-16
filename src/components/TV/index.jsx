import React from 'react';
import grid from '../../assets/img/reshetka.png'
import btn from '../../assets/img/btn.png'
import reshetka from '../../assets/img/reshetka.png'

import './index.scss'

const TV = () => {
    return (
        <div className='TV'>
            <div className='bg'></div>
            <div className='window'>
                <a href='https://ya.ru'>
                <div className='actionBtn'>
                    <div className='bg'></div>
                    <div className='bgHover'></div>
                    <div className='actionBtn-text'>День 1</div>
                </div>
                </a>

            </div>
            <div className='buttons'>
                <div className='reshetka'>
                    <img src={grid} alt=""/>
                </div>
                <div className='btns'>
                    <div className='channel'>
                        <img src={btn} alt=""/>
                        <span>1</span>
                    </div>
                    <div className='channel'>
                        <img src={btn} alt=""/>
                        <span>2</span>
                    </div>
                    <div className='channel'>
                        <img src={btn} alt=""/>
                        <span>3</span>
                    </div>
                    <div className='channel'>
                        <img src={btn} alt=""/>
                        <span>4</span>
                    </div>
                    <div className='channel'>
                        <img src={btn} alt=""/>
                        <span>5</span>
                    </div>
                </div>
                <div className='info'>
                    <div>INFO</div>

                </div>
            </div>
        </div>
    )
}

export default TV;