import * as React from 'react';
import PropTypes from 'prop-types';
import {
    MemoryRouter,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const entries = ["/", "/profile", "/git-repos", "/analyze", "/singIn", "signUp"]

export default function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return (
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

Router.propTypes = {
    children: PropTypes.node,
};
