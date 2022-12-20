import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { dataSliceActions } from '../store/dataSlice'

const Dashboard = () => {
    const fakeStoreData = useSelector(state => state.data.fakestore)
    const dummyjsonData = useSelector(state => state.data.dummyjson)
    const jsonPlaceHolderData = useSelector(state => state.data.jsonData)



    const dispatch = useDispatch()


    function fetchData() {
        const fakeStoreData = axios.get('https://fakestoreapi.com/products')
        const dummyJsonData = axios.get('https://dummyjson.com/products')
        const jsonPlaceHolderData = axios.get('https://jsonplaceholder.typicode.com/posts')


        axios.all([fakeStoreData, dummyJsonData, jsonPlaceHolderData]).then(axios.spread((...allData) => {
            const fakeStore = allData[0].data.slice(0, 10)
            const dummyJson = allData[1].data.products.slice(0, 10)
            const jsonplaceholder = allData[2].data.slice(0, 10)

            dispatch(dataSliceActions.getFakestore(fakeStore))
            dispatch(dataSliceActions.getDummyjson(dummyJson))
            dispatch(dataSliceActions.getJsonplaceholder(jsonplaceholder))


        }))



    }

    useEffect(() => {

        fetchData()

    }, [])

    function deleteHandler(deleteId, type) {

        if (type === 'fakeStore') {

            const deleteData = fakeStoreData.filter(item => item.id !== deleteId)

            dispatch(dataSliceActions.getFakestore(deleteData))
            return

        }
        else if (type === 'dummyJson') {

            const deleteData = dummyjsonData.filter(item => item.id !== deleteId)

            dispatch(dataSliceActions.getDummyjson(deleteData))
            return

        }

        else if (type === 'jsonPlaceHolder') {
            const deleteData = jsonPlaceHolderData.filter(item => item.id !== deleteId)

            dispatch(dataSliceActions.getJsonplaceholder(deleteData))


        }

    }

    function submitHanlder(e, type) {

        const title = e.target[0].value
        const description = e.target[1].value

        e.preventDefault()

        if (type === 'fakeStore') {

            const addData = [{ id: Math.random() * 10, title, description }, ...fakeStoreData]

            dispatch(dataSliceActions.getFakestore(addData))



        }

        else if (type === 'dummyJson') {

            const addData = [{ id: Math.random() * 10, title, description }, ...dummyjsonData]

            dispatch(dataSliceActions.getDummyjson(addData))



        }

        else if (type === 'jsonPlaceHolder') {

            const addData = [{ id: Math.random() * 10, title, body: description }, ...jsonPlaceHolderData]

            dispatch(dataSliceActions.getJsonplaceholder(addData))



        }




    }



    return (
        <div>
            <div >
                <h1 style={{ textAlign: 'center' }}>Fake Store Data</h1>
                <form onSubmit={(e) => { submitHanlder(e, 'fakeStore') }}>
                    <input placeholder='Title' type='text' />
                    <input placeholder='Description' type='text' />
                    <button type='submit'>Add Data to FakeStore</button>
                </form>
                {fakeStoreData.map(data => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <img style={{ height: '80px' }} src={data.image} alt="" />
                        <p>{data.description}</p>
                        <h3>{data.category}</h3>
                        <button onClick={() => { deleteHandler(data.id, 'fakeStore') }}>Delete</button>
                    </div>
                ))}
            </div>



            <div>
                <h1 style={{ textAlign: 'center' }}>Dummy Json Data</h1>
                <form onSubmit={(e) => { submitHanlder(e, 'dummyJson') }}>
                    <input placeholder='Title' type='text' />
                    <input placeholder='Description' type='text' />
                    <button type='submit'>Add Data to Dummy Json</button>
                </form>

                {dummyjsonData.map(data => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <h3>{data.category}</h3>
                        <button onClick={() => { deleteHandler(data.id, 'dummyJson') }}>Delete</button>
                    </div>
                ))}
            </div>


            <div style={{ textAlign: 'center' }}>
                <h1>Json Placeholder Data</h1>
                <form onSubmit={(e) => { submitHanlder(e, 'jsonPlaceHolder') }}>
                    <input placeholder='Title' type='text' />
                    <input placeholder='Description' type='text' />
                    <button type='submit'>Add Data to jsonPlaceHolder</button>
                </form>
                {jsonPlaceHolderData.map(data => (
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>

                        <button onClick={() => { deleteHandler(data.id, 'jsonPlaceHolder') }}>Delete</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard