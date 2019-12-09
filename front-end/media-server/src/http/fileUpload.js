import axios from 'axios';
import { createStore } from 'redux';
import { uploadReducer } from '../reducers/uploadReducer';

let store = createStore(uploadReducer);
let uploaded = false;
export default function fileUpload(data) {
    console.log(data);
    for (var key of data.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    axios.post('http://localhost:5000/upload', data).then((res) => {

        if (res.status === 200) {
            console.log(true);
            store.dispatch({ type: 'UPLOADED' })
        }

    }, (err) => {
        console.log(err);

    })

}
export { fileUpload, store }
