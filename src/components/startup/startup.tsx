import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ActionsType, RootStateType } from '../../store';
import * as userActions from "../../store/actions/user-actions";
import * as organizationActions from "../../store/actions/organization-actions";
import CenterLoader from '../center-loader/center-loader';




interface AppProps {
  loadingUsers: boolean;
  loadingOrganization: boolean;
  loadUsers: (groupName: string) => void;
  loadOrganization: (groupName: string) => void;
}


class Startup extends React.Component<AppProps, {}> {

  componentDidMount() {
    this.props.loadOrganization('grupotesseract');
    this.props.loadUsers('grupotesseract');
  }

  render() {
    return (this.props.loadingUsers && this.props.loadingOrganization)
    ? <CenterLoader></CenterLoader>
    : this.props.children;  
  }

}

const mapStateToProps = (state: RootStateType) => ({
  loadingUsers: state.user.loading,
  loadingOrganization: state.organization.loading,
})

function mapDispatchToProps (dispatch: Dispatch<ActionsType>) {
  return {
    loadUsers: (groupName: string) => dispatch(userActions.LoadUsersAction(groupName)),
    loadOrganization: (groupName: string) => dispatch(organizationActions.LoadOrganizationAction(groupName)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Startup)