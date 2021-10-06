import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong className="text-secondary">{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {userInfo ? (
               <Card.Text as='h3'>${product.price-10}</Card.Text>
            
              ) : (
                <Card.Text as='h3'>${product.price}</Card.Text>
              )}
        
      </Card.Body>
    </Card>
  )
}

export default Product