import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import ProductCarosal from '../components/ProductCarosal'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      {/* <ProductCarosal></ProductCarosal> */}
      <h1>Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          {userInfo ? (
                <>
                  <h1>Exclusive Products</h1>
                  <Row>
                    {products.map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <h1>Log in to get the Exclusive products</h1>
              )}
        </Row>
      )}
    </>
  )
}
export default HomeScreen