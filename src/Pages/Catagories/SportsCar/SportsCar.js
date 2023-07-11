import React, { useEffect } from 'react';
import { Catagories } from '../Catagories';
import { CardComponent } from '../../../Components/ReusableComponent/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';
import { getAllCarsAction } from '../../../Redux/Car/CarAction';

export const SportsCar = () => {
    const { car } = useSelector(state => state.car);
    const dispatch = useDispatch();
    // Filter the car imports to display only HatchBack cars
    const sportsCar = car.filter(item => item.carType === 'Sports Car');

    useEffect(() => {
        dispatch(getAllCarsAction(sportsCar))
    })
    return (
        <Catagories>
            <h5 className='categories-p'>Showing {sportsCar.length} Cars of {car.length} total Cars</h5>
            <div>Sports Car</div>
            <Row className='text-align-right d-flex flex-wrap'>
                {sportsCar.length > 0 ? (
                    sportsCar.map(item => (
                        <Col key={item.id} sm={6} md={4} lg={3} className='d-flex flex-wrap mt-4'>
                            <CardComponent
                                carId={item.id}
                                carImg={item.carImg}
                                carType={item.carType}
                                price={item.carPrice}
                                description={item.description}
                            />
                        </Col>
                    ))
                ) : (
                    <div className='d-flex justify-content-center align-items-center p-5' style={{ width: '100%' }} >
                        <Alert>No Cars Found</Alert>
                    </div>
                )}
            </Row>
        </Catagories>
    );
};
