import React, { useState } from 'react'

const Detail = ({ yani, remove }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='Detail'>
            <h1>Our Tours</h1>
            <div className='underline'></div>
            <div className='container'>
                {yani.map((items) => {
                    const { id, image, info, price, name } = items
                    return (
                        <>
                            <div className='itemdata'>
                                <img className='image' src={image} alt="randomImage" />
                                <div className='priceItems'>
                                    <h5>{name}</h5>
                                    <h5 className='price'>${price}</h5>
                                </div>
                                <p>
                                    {show ? info : `${info.substring(0, 200)}...`
                                    }
                                    <button className='showbutton' onClick={() => setShow(!show)}>
                                        {show ? "show less" : "show more"}
                                    </button>
                                </p>
                                <button className='notInterested' onClick={() => remove(id)}>Not Interested</button>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default Detail