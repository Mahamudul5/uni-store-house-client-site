import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'



const Item = ({ item }) => {
    const { id, name, img, price, description } = item;
    const navigate = useNavigate();
    const goToDetails = id => {
        navigate(`Item/${id}`)
    }
    return (
        <div >
            <div>
                <Card style={{ width: '18rem' }} className='mb-5 mx-auto Item-main'>
                    <Card.Img className='img-fluid w-100' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'><h3>{name}</h3></Card.Title>
                        <Card.Text>
                            <h5 className='text-center'>price:{price}</h5>
                            <p className='text-center'>{description}</p>
                        </Card.Text>
                        <Button onClick={() => goToDetails(id)} variant="primary d-block mx-auto">Update</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Item;