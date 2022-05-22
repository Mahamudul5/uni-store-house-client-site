import { useEffect, useState } from 'react';

const useData = () => {
    const [dataItem, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setData(data));
    }
        , [dataItem])
    return [dataItem, setData];
};

export default useData;