import React from 'react';

import openMe from "../../assets/img/popup/openMe.png"
import './index.scss'

const days = [
    'image-card-back day1',
    'image-card-back day2',
    'image-card-back day3',
    'image-card-back day4',
    'image-card-back day5',
]

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
                <div className='info'>
                    <div className='info-content'>
                        {/*<div className="bottomPerson"></div>*/}
                        <div className='image'>
                            <div className='image-bg'> </div>
                            <div className='image-card'>
                                <div className='image-card-front'></div>
                                <div className='image-card-back day5'></div>
                            </div>
                            <div className='image-bg'> </div>
                            <div className='image-sticker'> </div>
                        </div>
                        <div className='line'></div>
                        <div className='message'>
                            <div className='sender'>
                                <div className='sender-text'>
                                    <div className='sender-text-title'>ОТПРАВИТЕЛЬ:</div>
                                    <div className='sender-text-name'>CRYPTON & CRYPTUS</div>
                                    <div className='sender-text-line'> </div>
                                </div>
                                <div className='sender-mark'></div>
                            </div>
                            <div className='hohoho'></div>
                                <span>Привет, дорогой друг!</span>
                                <div className="underline"></div>
                                <span>Вот и заканчивается этот сложный год. Давай</span>
                                <div className="underline"></div>
                                <span>вспомним самые значимые его события!</span>
                                <div className="underline"></div>

                                <div className='br'> </div>

                                <span>Первым был крах LUNA</span>
                                <div className="underline"></div>
                                <span>Посмотрим, как это было, и закрепим знания,</span>
                                <div className="underline"></div>
                                <span>чтобы в очередной раз не наступить на те же</span>
                                <div className="underline"></div>
                                <span>грабли, а также хорошенько развлечемся!</span>
                                <div className="underline"></div>

                                <div className='br'> </div>


                            <span>Переходи на Crew3 и выполняй задания.</span>
                                <div className="underline"></div>
                                <span>Помни, чем выше ты в топе, тем больше шанс</span>
                                <div className="underline"></div>
                                <span>на победу. Удачи!</span>
                                <div className="underline"></div>

                                <a href="https://crypton2023cryptus.crew3.xyz/invite/hmWc-uzifQ_RPcAkeq4W1">
                                    <div className='button'>
                                       <div className='button-text'>Перейти к заданиям</div>
                                        <div className='button-arrow'></div>
                                    </div>
                                </a>
                        </div>
                    </div>
                    <div className='person'></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;