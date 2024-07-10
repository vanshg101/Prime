import React from 'react'
import Row1 from '../components/Row/Row1'
import Row2 from '../components/Row/Row2'
import Row3 from '../components/Row/Row3'
import Row4 from '../components/Row/Row4'
import Row5 from '../components/Row/Row5'

function Home () {
    return (
    <div className="container bg-black mx-auto overflow-x-scroll">
        <Row1 rowTitle="TV shows we think you'll like" />
        <Row2  rowTitle="Top TV"/>
        <Row3  rowTitle="Filmfare OTT Award Winners "/>
        <Row4  rowTitle="Comedy TV " />
        <Row5  rowTitle="TV shows we think you'll like " />
    </div>

    )
}

export default Home 
