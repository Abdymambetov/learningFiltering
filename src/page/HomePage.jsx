import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Cart from '../components/Cart'
import Input from '../components/Input'
import { getProductsAsync, searchAction } from '../store/SearchSlice'
import { Container } from '@mui/material'



function HomePage() {
    const {products} = useSelector(state=>state.search)
    const [filtered, setFiltered] = useState([])
    const dispatch = useDispatch()
    const [value,setValue] = useState({
        inp:'',
        inp2:''
    })
    useEffect(() => {
        dispatch(getProductsAsync())
    }, []);

    useEffect(() => {
        const filt = products.filter(item => item?.title.toLowerCase().startsWith(value.inp.toLowerCase()));
        filt?setFiltered(filt):setFiltered(products)
    }, [value.inp])

    useEffect(() => {
        const filt = products.filter(item => item?.category.toLowerCase().startsWith(value.inp2.toLowerCase()))
        filt?setFiltered(filt):setFiltered(products)
    }, [value.inp2])

    const handlClick =()=>{
        dispatch(searchAction(value))
    }

  return (
    <div style={{backgroundColor: 'dark'}}>
        <Container 
            sx={{
                '&.MuiContainer-root': {
                    padding: 0,
                    Width: '1240px',
                },
            }}
            className='container'
      >
        <div style={{marginTop: '30px'}}>
            <Input list='inp' name='inp' value={value.inp} onChange={(e)=>{e.target.value==='' &&  dispatch(getProductsAsync())
                    setValue({...value,[e.target.name]:e.target.value})}}
                />
                <datalist id='inp'>
                    {filtered.map(item => <option key={item?.id}>{item?.title}</option>)}
                </datalist>

                <Input list='inp2' name='inp2' value={value.inp2} onChange={(e)=>{e.target.value==='' &&  dispatch(getProductsAsync())
                    setValue({...value,[e.target.name]:e.target.value})}}/>
                <datalist id='inp2'>
                    {filtered.map(item=> <option key={item.id}>{item?.category}</option>)}
                </datalist>
                <Button onClick={handlClick} variant='contained' className='button'>search</Button>
                <div className='carts'>
                    {products.map((item, index)=>
                        <Cart key={item.id} item={item}/>
                    )}
                </div>
        </div>
        </Container>
    </div>
  )
}

export default HomePage