import React from 'react';
import { Nav } from 'react-bootstrap';
import './mobilemenu.css'

const MobileMenu = () => {
    return (
        <div>
            <div class="mobile">
                {/* <Nav.Link href="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Nav.Link> */}
                <Nav.Link href="/ad-min"><i class="fas fa-layer-group"></i> Lead</Nav.Link>
                <Nav.Link href="/profilescreen"><i class="fa fa-user" aria-hidden="true"></i> Profile</Nav.Link>
                <Nav.Link href="/productscreen"><i class="fas fa-list-alt"></i> Products</Nav.Link>
            </div>
        </div>
    );
}

export default MobileMenu;
