import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className='generalNav'>
                <navContain className='nav'>
                    <navItem className='navItem'>
                        Experience
                    </navItem>
                    <navItem className='navItem'>
                        About me
                    </navItem>
                    <navItem className='navItem'>
                        Skills
                    </navItem>
                    <navItem className='navItem'>
                        Projects
                    </navItem>
                    <navItem className='navItem'>
                        Contact
                    </navItem>
                </navContain>
                </div>
            </div>
        );
    }
}

export default NavBar;