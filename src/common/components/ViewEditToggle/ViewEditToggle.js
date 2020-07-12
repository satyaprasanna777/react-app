import React from 'react'
import { withToggleFunction } from '../MyfunctionalComponent/MyFunctionalComponent'
import {
   ViewEditContainer,
   HOCsHeading,
   EditButtonAndText,
   EditButton
} from './styleComponents'

class ViewEditToggle extends React.Component {
   render() {
      const { toggleStatus, onToggle } = this.props
      return (
         <div>
            <HOCsHeading>HOC's Usage</HOCsHeading>
            <ViewEditContainer>
               <b>View edit toggle</b>
               <EditButtonAndText>
                  {toggleStatus ? (
                     <input
                        type='text'
                        defaultValue='Click on edit button to start editing'
                     />
                  ) : (
                     <p>Click on edit button to start editing</p>
                  )}
                  <EditButton onClick={onToggle}>
                     {toggleStatus ? 'Cancel' : 'Edit'}
                  </EditButton>
               </EditButtonAndText>
            </ViewEditContainer>
         </div>
      )
   }
}
const EditWithToggle = withToggleFunction(ViewEditToggle)

export { EditWithToggle }
