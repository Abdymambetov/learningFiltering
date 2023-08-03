import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Cart from '../components/Cart'
import Input from '../components/Input'
import { getProductsAsunc, searchAction } from '../store/SearchSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageFlag from './languageFlags'

function HomePage() {
    const {products} = useSelector(state=>state.search)

    const dispatch = useDispatch()
    const [value,setValue] = useState({
        inp:'',
        inp2:''
    })
    useEffect(() => {
        dispatch(getProductsAsunc())
    }, []);

    const handlClick =()=>{
        dispatch(searchAction(value))
    }
  return (
    <div>
        <Input name='inp' onChange={(e)=>{e.target.value==='' &&  dispatch(getProductsAsunc())
            setValue({...value,[e.target.name]:e.target.value})}}
        />
        <Input name='inp2' onChange={(e)=>{e.target.value==='' &&  dispatch(getProductsAsunc())
            setValue({...value,[e.target.name]:e.target.value})}}/>

        <Button onClick={handlClick}>search</Button>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>

        <div className='carts'>
            {products.map((item, index)=>
            <Cart key={item.id} item={item}/>
            )}
        </div>
    </div>
  )
}

export default HomePage