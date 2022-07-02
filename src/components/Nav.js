import React from 'react';
import { Link, Outlet } from 'react-router-dom'


class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className='nav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/battle">Battle</Link>
                    </li>
                    <li>
                        <Link to="/popular">Popular</Link>
                    </li>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Nav