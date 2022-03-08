import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}: any) => (
    <>
        <Route
            {...rest}
            render={() => (
                localStorage.getItem('token')
                    ? <Component/>
                    : <Redirect to="/login"/>)}
        />
    </>
);
export const PublicRoute = ({component: Component, ...rest}: any) => (
    <Route
        {...rest}
        render={() => (
            localStorage.getItem('token')
                ? <Redirect to="/"/>
                : <Component/>
        )}
    />
);
