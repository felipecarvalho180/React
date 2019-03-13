import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showsideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showsideDrawer: false});
    }

    render() {
        return(
            <Auxiliary>
                <Toolbar/>
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

