import React from 'react'
import { observable } from 'mobx'
import { HoverText, MainContainer } from './styleComponents'
import { observer } from 'mobx-react'

@observer
class HoverExample extends React.Component {
   @observable hover = false

   toggleHover = () => {
      this.hover = !this.hover
   }

   render() {
      return (
         <MainContainer
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
         >
            hai hello this is prasanna. I am doing well, what about you.
            {/* <HoverText>
               I will appear when i am hovered on main container.
            </HoverText> */}
            {this.hover && (
               <HoverText>
                  I will appear when i am hovered on main container.
               </HoverText>
            )}
         </MainContainer>
      )
   }
}

export { HoverExample }

// import React from 'react'
// import { AnimationWrapper } from 'react-hover-animation'

// class HoverExample extends React.Component {
//    render() {
//       return (
//          <AnimationWrapper
//             style={{
//                textAlign: 'center',
//                borderRadius: '5px',
//                padding: '5px',
//                backgroundColor: 'lightblue'
//             }}
//             config={{
//                color: {
//                   initial: 'black',
//                   onHover: 'red'
//                }
//             }}
//          >
//             <h1>I animate on hover</h1>
//          </AnimationWrapper>
//       )
//    }
// }
// export { HoverExample }
