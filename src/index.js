
import axios from 'axios';
import { drawData }  from "./utils"; 

const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
    deleteBtn = document.getElementById('delete'),
    wrapper = document.getElementById('data');

axios(apiUrl)
    .then((response) => drawData(response.data, wrapper));

wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        axios(`${apiUrl}/delete?id=${e.target.dataset.userId}`)
        .then((response) => drawData(response.data, wrapper));
    }
});

addBtn.addEventListener('click', () => {
    axios(`${apiUrl}/add`)
    .then((response) => drawData(response.data, wrapper));
});

deleteBtn.addEventListener('click', () => {
    axios(`${apiUrl}/delete`)
    .then((response) => drawData(response.data, wrapper));
});

