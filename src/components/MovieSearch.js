import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import { ImSearch } from "react-icons/im";
const MovieSearch = () => {
    const [search, setSearch] = useState()
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <Col lg={6} >
                <div className='MovieSearch'>
                    <input value={search} onChange={onChange} type="text" id="box" placeholder="Film ara..." class="search__box" />
                    <ImSearch class="fas fa-search search__icon" />
                </div>
            </Col>
        </Container>
    )
}
export default MovieSearch