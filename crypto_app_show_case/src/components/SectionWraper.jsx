import React from 'react'

import styles from '../styles/Global'
import assets  from '../assets'

import Button from './Button'

const SectionWraper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
  return (
    <div className={`min-h-screen 
        ${styles.section} 
        ${ reverse ? styles.bgWhite : styles.bgPrimary}  
        ${banner}`} >

        <div className={`flex items-center 
            ${reverse ? styles.boxReverseClass : styles.boxClass} 
            w-11/12 sm:w-full minmd:w-3/4`} >

            <div className={` ${styles.descDiv} 
                ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}
                ${reverse ? styles.textRight : styles.textLeft}
                `}>
                <h1 className={`
                    ${styles.h1Text}
                    ${reverse ? styles.blackText : styles.whiteText}
                `}>{title}</h1>
                <p className={`
                    ${styles.descriptionText}
                    ${reverse ? styles.blackText : styles.whiteText}
                `}>{description}</p>

                {/* this means if the showBtn is true and render inside elements */}
                {showBtn &&(
                    <Button
                        assetUrl={assets.expo}
                        link="https://expo.dev/@vimalrijalau/cryptoApp?serviceType=classic&distribution=expo-go"
                    />
                )}

            </div>

            {/* image section */}
            <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
               <img src={mockupImg} alt="mockupImage" 
               className={`
               ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
               ${styles.sectionImg}
               `}/>
             </div>

        </div>

    </div>
  )
}

export default SectionWraper