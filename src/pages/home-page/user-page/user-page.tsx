import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../../../models/user';
import { RootStateType, ActionsType } from '../../../store';
import { getUserById } from '../../../store/selectors/user-selectors';
import CenterLoader from '../../../components/center-loader/center-loader';
import * as userActions from "../../../store/actions/user-actions";
import UserCard from '../../../components/user-card/user-card';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface UserPageProps {
  user: User | undefined,
  loadUserAllData: (login: string) => void,
}

class UserPage extends React.Component<UserPageProps, {}> {

    componentDidMount() {
        if(this.props.user !== undefined && !this.props.user.loadedAllData)
            this.props.loadUserAllData(this.props.user.login);
    }

  render() {
    return (
        (this.props.user !== undefined)
        ? (this.props.user.loadedAllData)
            ? <div>
                <Container fluid>
                  <br/>
                  <br/>
                  <br/>
                  <Row className='text-center'>
                    <Col>
                      <UserCard user={this.props.user}></UserCard>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
                  <br/>
                  <Row className='justify-content-md-center'>
                  <Col md="auto">
                    <Link to='/'>
                      <Button variant="contained" color="primary">
                        Voltar
                      </Button>
                    </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            : <CenterLoader></CenterLoader>
        : <div>
            <Container fluid>
              <br/>
              <br/>
              <br/>
              <Row className='text-center'>
                <Col sm={12} md={12}>
                  <p>ops, algo deu errado!</p>
                </Col>
              </Row>
            </Container>
          </div>
    );
  }

 
}

function mapStateToProps(state: RootStateType, ownProps: any) {
    return { 
        user: getUserById(state, Number(ownProps.match.params.id))
    }
}

function mapDispatchToProps (dispatch: Dispatch<ActionsType>) {
    return {
      loadUserAllData: (login: string) => dispatch(userActions.LoadUserAllDataAction(login)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);