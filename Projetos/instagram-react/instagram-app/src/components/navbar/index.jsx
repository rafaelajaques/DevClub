import { Flex } from '../../style'
import * as C from './style'
import {BsSun} from 'react-icons/bs'

export function NavBar(){
    return <C.Container>
        <Flex>
            <C.BtnTheme>
                <BsSun/>
            </C.BtnTheme>
        </Flex>
    </C.Container>
}