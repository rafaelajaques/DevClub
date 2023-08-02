/* eslint-disable no-unused-vars */
import { Flex } from '../../style'
import * as C from './style'
import {BsSun, BsMoon} from 'react-icons/bs'
import PropTypes from 'prop-types'

export function NavBar({themeToggler, theme}){
    return <C.Container>
        <Flex>
            <C.BtnTheme onClick={themeToggler} >
              {theme === 'light' ? <BsMoon/> : <BsSun/>}
            </C.BtnTheme>
        </Flex>
    </C.Container>
}

NavBar.propTypes ={
    themeToggler: PropTypes.func,
    theme: PropTypes.string,
}