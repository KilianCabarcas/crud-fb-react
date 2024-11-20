import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const mySwal = withReactContent(Swal)

const Show = () => {

    //1.  hooks config
    const [products, setProducts] = useState([])

    //2. referenciar db firestore
    const productsCollection = collection(db, "products")

    //3. show docs
    const getProducts = async () =>{
        const data = await getDocs(productsCollection)
        setProducts(
            data.docs.map((doc) => ({...doc.data(),id:doc.id}))
        )
        console.log(products)
    }

    //4. delete docs
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
    }
    //5. SA2 confirm

    //6. useEffect
    useEffect( () => {
        getProducts()
    }, [])

    //7. return view

    return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to='/create' className='btn btn-secondary mt-2 mb-2'>Create</Link>
                </div>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                           <th>Description</th> 
                           <th>Stock</th> 
                           <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={'/edit/${product.id}'} className='btn btn-light'><i className="fa-solid fa-pencil"></i></Link>
                                    <button onClick={ () => {deleteProduct(product.id)} } className='btn btn-danger'><i className="fa-regular fa-trash-can"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    </>
    )
}

export default Show