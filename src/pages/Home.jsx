import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {posts} from "../help/posts";

const Home = () => {
    const [opacityValue, setOpacity] = useState(false);


    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {posts.map((obj) => {
                    return(
                    <Col key={obj.id}>
                        <Card>
                            <div className={'loading'} style={{visibility: opacityValue ? "hidden" : "visible"}}>
                                <div className="spinner"/>
                            </div>
                            <div className="mediaContent" style={{visibility: opacityValue ? "visible" : "hidden"}}>
                                <LazyLoadImage src={obj.imageUrl} afterLoad={() => setOpacity(true)}/>
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/post/${obj.id}`}>{obj.title}</Link>
                                </Card.Title>
                                <Card.Text>
                                    {obj.text.substring(0,99)}...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )})}
            </Row>
        </div>
    );
};

export default Home;