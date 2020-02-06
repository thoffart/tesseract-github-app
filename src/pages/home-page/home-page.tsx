import React, { Dispatch } from 'react';
import UserCard from '../../components/user-card/user-card';
import { connect } from 'react-redux';
import { ActionsType, RootStateType } from '../../store';
import * as userActions from "../../store/actions/user-actions";
import { User } from '../../models/user';
import { filterUsers, getFilterText } from '../../store/selectors/user-selectors';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { getOrganization } from '../../store/selectors/organization-selectors';
import { Organization } from '../../models/organization';
import OrganizationCard from '../../components/organization-card/organization-card';
import { Link } from 'react-router-dom';


interface HomePageProps {
  users: User[],
  organization: Organization | undefined,
  filterText: string,
  ChangeUsersFilterText: (filterText: string) => void;
}

const StyledInput = styled.input`
  width: 50%;
  text-align: center;
  border-radius:10px;
`


class HomePage extends React.Component<HomePageProps, {}> {

  render() {
    return (
      <div>
        <Container fluid>
          <br/>
          <br/>
          <Row>
            <OrganizationCard name={this.props.organization?.name} email={this.props.organization?.email} avatar_url={this.props.organization?.avatar_url}></OrganizationCard>
          </Row>
          <br/>
          <br/>
          <Row  className="text-center">
            <Col>
            <StyledInput
              type="text"
              placeholder="Search for the user's login"
              value={this.props.filterText}
              onChange={e => this.props.ChangeUsersFilterText(e.target.value)}>
              </StyledInput>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            {
              this.props.users.map((user: User, i: any) => 
                <Col sm={12} md={3} key={user.id}>
                    <br/>
                    <Link to={`/users/${user.id}`}>
                     <UserCard user={user}></UserCard>
                    </Link>
                    <br/>
                </Col>
              )
            }
          </Row>
        </Container>
        <br/>
      </div>
    );
  }

 
}


const mapStateToProps = (state: RootStateType) => ({
  users: filterUsers(state) ?? [],
  organization: getOrganization(state),
  filterText: getFilterText(state),
})

function mapDispatchToProps (dispatch: Dispatch<ActionsType>) {
  return {
    ChangeUsersFilterText: (filterText: string) => dispatch(userActions.ChangeUsersFilterTextAction(filterText)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)