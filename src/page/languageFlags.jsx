// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
// import cookies from 'js-cookie';
import  Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import  Menu from '@mui/material/Menu';
import MenuItem  from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language'
import i18next from 'i18next';
export default function languageFlags() {

  const {t, i18n} = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  // const languages = [
  //   {
  //     code: 'en',
  //     counttry_code: 'en',
  //     name: 'English'
  //   },
  //   {
  //     code: 'ru',
  //     counttry_code: 'ru',
  //     name: 'Russia'
  //   }
  // ]

  // const {t} = useTranslation()
  // const currentlanguageCode = cookies.get('i18next') || 'en'

  // const [anchorE1, setAnchorE1] = useState(null)
  // const open = Boolean(anchorE1)

  // const handleClick = (event) => {
  //   setAnchorE1(event.currentTarget);

  // };
  // const handleClose = () => {
  //     setAnchorE1(null)
  // }
  return (
    <>
    <button onClick={() => changeLanguage("en")}>English</button>
    <button onClick={() => changeLanguage("ru")}>Russia</button>
    <p>{t("komo")}</p>
    <p>{t("hello")}</p>
    <p>{t("erkut")}</p>
      {/* <div className='flags'>
        <Tooltip title={t('language')} arrow>
          <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
            <LanguageIcon style={{width: '32px', height: '32px'}}/>
          </IconButton>
        </Tooltip>
        <Menu 
        anchorEl={anchorE1}
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin= {{horizontal: 'right', vertical: 'top'}}
        disableScrollLock= {true}
        PaperProps = {{
          elevation:  0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
            mt: 1.5,
            bgcolor: '#F8F8F8',
            '& .MuiAvatar-root' : {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before' : {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#F8F8F8',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        >
        {languages.map(({code, counttry_code, name}) => (
          <Tooltip title={name} arrow placement='left'>
            <MenuItem key={code} style={{
              backgroundColor: currentlanguageCode === code ? '#D8D8D8' : '#F8F8F8',
              border: currentlanguageCode === code ? '1px solid #989898' : '#F8F8F8'
            }}>
            <IconButton onClick={() => {
              i18next.changeLanguage(code)
            }}>
              <div style={{
                opacity: currentlanguageCode === code ? 1 : 0.3,
                width: '3rem',
                height: '2rem'
              }}>

              </div>
            </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
        </Menu>
      </div> */}
         

    </>
  )
}

// const styles = StyleSheet.create({})