import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormFun = (props) => {
    const navigate = useNavigate();
    const gotoForm = () => {
        navigate('/Form');
    }
    const gotoHome = () => {
        navigate('/');
    }
    const [Form, setForm] = useState({
        fname: '',
        lname: '',
        bd: ''
    });
    const [Show, setShow] = useState(false)
    const ChangeEventHendler = (e) => {
        setForm({
            ...Form,
            [e.target.name]: e.target.value
        });
        setShow(false);
    }
    const ClickEventHendler = () => {
        if (Form.fname !== '' && Form.lname !== '' && Form.bd !== '')
            setShow(true);
        else
            setShow(false);
    }
    return (
        <div>
            <div className='text-center mt-5 mb-5'>
                <h3 id='useEffect'>Form using Function useState {props.test}</h3>
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div className="form-outline">
                        <input type="text" name='fname' placeholder='enter your first name' id="fname" className="form-control" onChange={ChangeEventHendler} />
                        <input type="text" name='lname' placeholder='enter your last name' id="lname" className="form-control" onChange={ChangeEventHendler} />
                        <input type="text" name='bd' placeholder='enter your bd' id="bd" className="form-control" onChange={ChangeEventHendler} />
                    </div>
                </div>
                <button className='btn btn-success ms-3' onClick={ClickEventHendler}>Enter</button>
                <span>Output onChange : {Form.fname},{Form.lname},{Form.bd}</span><br />
                {(Show) ? <div> <span>Output Onclick : {Form.fname},{Form.lname},{Form.bd}</span> </div> : ''}
                <br />
                <button id='Home' onClick={gotoHome}>Go to Home</button>
                <button onClick={() => navigate(-1)}>Go to back</button>
            </div>
        </div>
    )
}

export default FormFun
