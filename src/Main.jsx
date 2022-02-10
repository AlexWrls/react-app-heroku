import React, {useEffect, useState} from 'react';

const Main = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);


        useEffect(() => {
            fetch('/main')
                .then((res) => res.json())
                .then(
                    (data) => {
                        setData(data);
                        console.log(data);
                        setLoading(false);
                    },
                    (error) => {
                        console.log(error);
                        setLoading(false);
                    }
                );
        }, []);

    if (isLoading) {
        return <h1>Loading data... </h1>;
    } else {
        return (
            <div className="card">

                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item)=>(
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td><button className="btn-sm btn-primary">edit</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default Main;
