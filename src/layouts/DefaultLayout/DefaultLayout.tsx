import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

interface Props {
    children: React.ReactNode
}

function DefaultLayout({ children }: Props) {
    return (
        <div>
            <Header></Header>
            <div className="grid wide">{children}</div>
            <Footer></Footer>
        </div>
    )
}

export default DefaultLayout
