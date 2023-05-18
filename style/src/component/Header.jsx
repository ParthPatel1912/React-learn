import React from 'react'
import { Title, Wrapper, Button, Center, OverideButton, Link, Div, newTheme } from '../assets/constant/headerConstant'

const Header = () => {
    return (
        <div>
            <Wrapper>
                <Title>
                    Styled Component
                </Title>
                <Center>
                    <Button>Normal</Button>
                    <Button $primary>Primary</Button>
                    <OverideButton as={'a'} href="google.com">Overided Button</OverideButton>
                    <OverideButton $primary>Overided Button</OverideButton>
                </Center>
                <Center>
                    <Link className={'text-danger'} href={'google.com'} linkText={'olop'}></Link>
                </Center>
                <Wrapper>
                    <Div>Hello testing</Div>
                    <Div theme={newTheme}>Hello testing</Div>
                </Wrapper>
            </Wrapper>
        </div>
    )
}

export default Header
