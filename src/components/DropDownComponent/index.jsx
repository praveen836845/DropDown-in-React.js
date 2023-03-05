import React from 'react'
import styles from './index.module.css'
import { MdDone } from 'react-icons/md'

const DropDownComponent = ({text , setIsOpen,  setValue , isSelect}) => {
    const clickHandler = () => {
        setValue(text)
        setIsOpen(false);
    }
  return (
    <div className={styles.list} onClick={clickHandler}>
        <div className={styles.listItem}>
            { text }
            { isSelect && <MdDone />}
        </div>
    </div>
  )
}

export default DropDownComponent