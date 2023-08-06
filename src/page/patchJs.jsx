
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct } from '../store/SearchSlice'
import { useTranslation } from 'react-i18next'

export default function PatchJs() {
  const {t} = useTranslation()
    const {id} = useParams()

    const dispatch = useDispatch()
    const {oneProduct} = useSelector(state => state.search)
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])
    console.log(oneProduct);
  return (
    <>
            <h2>name: {oneProduct.description}</h2>
            <h2>Body: {oneProduct.id}</h2>
            <p>price: {oneProduct.price}$</p>
            <img src={oneProduct.image} alt=""/>
    </>
  )
}

