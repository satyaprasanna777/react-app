import React from 'react';
import { observer, inject } from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';


@inject('userStore')
@observer
class UsersPage extends React.Component {

    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        this.props.userStore.getUsers()
    }

    renderUsersList = () => {
        const { users } = this.props.userStore;
        if (users.length === 0)
            return <NoDataView/>
        return users.map(userName => <div>{userName}</div>)
    }

    render() {
        const { getUsersApiStatus, getUsersApiError } = this.props.userStore;
        return (
            <LoadingWrapperWithFailure
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
            />)
    }
}

export default UsersPage;
