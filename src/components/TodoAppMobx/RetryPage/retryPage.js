import React from 'react'

class RetryPage extends React.Component {
    render() {
        let { onClickRetry } = this.props;
        return (
            <div>
                Network Error!!
                <button onClick={onClickRetry}>Retry</button>
            </div>)
    }
}

export default RetryPage;
