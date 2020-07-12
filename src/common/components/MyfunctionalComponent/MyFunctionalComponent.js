import React from 'react'

function withToggleFunction(WrappedComponent) {
   return class extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            toggleStatus: false
         }
      }

      onToggle = () => {
         this.setState({ toggleStatus: !this.state.toggleStatus })
      }

      render() {
         return (
            <WrappedComponent
               onToggle={this.onToggle}
               toggleStatus={this.state.toggleStatus}
            />
         )
      }
   }
}

function withScreenSizeDetectors(WrappedComponent) {
   return class extends React.Component {
      constructor(props) {
         super(props)
         this.state = { viewPortWidth: window.innerWidth }
      }

      componentWillUnmount = () => {
         return () =>
            window.removeEventListener('resize', this.selectDeviceType())
      }

      selectDeviceType = () => {
         if (window.innerWidth < 576) return 'Mobile'
         else if (window.innerWidth >= 576 && window.innerWidth < 992)
            return 'Tablet'
         else return 'Desktop'
      }

      updateState = () => {
         this.setState({ viewPortWidth: window.innerWidth })
      }

      render() {
         window.addEventListener('resize', this.updateState)
         return <WrappedComponent deviceType={this.selectDeviceType} />
      }
   }
}

export { withToggleFunction, withScreenSizeDetectors }
