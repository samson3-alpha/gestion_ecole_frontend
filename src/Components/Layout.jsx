import React from 'react'
import { Route, Routes } from 'react-router-dom';
import routes from '../routes'
import Sidebar from './Sidebar';
import TopBar from './TopBar';

function Layout({ children }) {

    return (
        <>

            <div className="flex h-screen">

                <Sidebar />

                {/* <!-- Main Content --> */}
                <div className="flex-1 flex flex-col">

                    {/* <!-- Top bar --> */}
                    <TopBar />

                    {/* Contenu des Autres */}
                    <div className="flex-1 p-6 space-y-6">
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
