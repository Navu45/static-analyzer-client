import * as React from 'react';
import PropTypes from 'prop-types';
import {
    MemoryRouter,
} from 'react-router-dom';

const entries = ["/", "/profile", "/git-repos", "/analyze", "/singIn", "signUp"]

export default function Router(props) {
    const { children } = props;

    return (
        <MemoryRouter initialEntries={entries} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

Router.propTypes = {
    children: PropTypes.node,
};
