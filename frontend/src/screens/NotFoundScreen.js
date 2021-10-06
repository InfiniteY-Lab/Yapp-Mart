import React from 'react';
import { Container } from 'react-bootstrap';

const NotFoundScreen = () => {
    return (
        <div className="mt-5 mb-0">
            <Container className="bg-dark align-items-center mt-5 mb-0 p-5">
                <div>
                    <h1 className="text-danger text-center p-5">
                        404! Not Found
                    </h1>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundScreen;