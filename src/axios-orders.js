import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-burger-builder-c1cbe-default-rtdb.firebaseio.com/'
});

export default instance;