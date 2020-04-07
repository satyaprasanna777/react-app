import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
class Examples extends React.Component {
    render() {
        let Div = styled.div `${tw`flex justify-between m-20`}`
        let Button = styled.button `${tw`shadow-lg`} background-color:${props=>props.back}; height:456px; width:50px`
        return <Div>
            <Button back={"black"} >button1</Button>
            <Button back={"purple"}>button2</Button>
            <Button back={"red"}>button2</Button>
        </Div>
    }
}
export { Examples }
