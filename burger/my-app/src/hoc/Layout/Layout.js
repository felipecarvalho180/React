import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showsideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showsideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState( (prevState) => {
            return {showsideDrawer: !prevState.showsideDrawer}
        });
    }

    render() {
        return(
            <Auxiliary>
                <Toolbar 
                    clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showsideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;

