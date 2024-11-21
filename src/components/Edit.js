import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);

    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        const productRef = doc(db, "products", id);
        const data = { description: description, stock: stock };
        try {
            await updateDoc(productRef, data);
            navigate('/');
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    const getProductById = async (id) => {
        const productRef = doc(db, "products", id);
        const product = await getDoc(productRef);
        if (product.exists()) {
            setDescription(product.data().description);
            setStock(product.data().stock);
        } else {
            console.log('El producto no existe');
        }
    };

    useEffect(() => {
        if (id) {
            getProductById(id);
        }
    }, [id]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Edit Product</h2>
                    <form onSubmit={update}>
                        <div className='mb-2'>
                            <label className='form-label'>Description</label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='form-label'>Stock</label>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                type='number'
                                className='form-control'
                            />
                        </div>
                        <button type='submit' className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;