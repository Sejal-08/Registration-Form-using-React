import React,{useState} from 'react'

const Multipleinputs = () => {
    const[userRegisteration, setuserRegisteration] = useState({
        username:"",
        email:"",
        phone:"",
        password: "",
    });

    const[records, setRecords] = useState([]);

    const  handleInput= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setuserRegisteration({...userRegisteration, [name ]: value});
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        const newRecord = { ...userRegisteration, id:new Date().getTime().toString() }
        setRecords([...records, newRecord]);
        console.log(records);
        setuserRegisteration({username:"", email: "", phone: "", password: ""});
    }
  return (
    <div className="form-container">
        <div className='Form'>
        
    <form action="" onSubmit={handleSubmit}>
    
        <header className='head'>Registration Form</header>
        <div div className='Texxt'>
            <div className='main'>
        <div className='text'>
            <label htmlFor="username">Fullname</label>
            <input type="text" className='user' autoComplete="off"
            value={userRegisteration.username}
            onChange={handleInput}
            name="username" id="username"/>
            </div>

           <div className='text'> <label htmlFor="email">Email</label>
            <input type="text" className='mail' autoComplete='off'
             value={userRegisteration.email}
             onChange={handleInput}
            name="email" id="email"/></div>

            <div className='text'><label htmlFor="phone">Phone</label>
            <input type="text" className='ph' autoComplete='off'
             value={userRegisteration.phone}
             onChange={handleInput}
            name="phone" id="phone"/></div>

           <div className='text'> <label htmlFor="password">Password</label>
            <input type="text" className='pwd' autoComplete='off'
             value={userRegisteration.password}
             onChange={handleInput}
             name="password" id="password"/>
        </div></div>
       <div className='button' ><button className="btn" type="Submit">Registration</button></div>
</div>
    </form>
    </div>
    <div>
        {
        records.map((curElem) =>{
return(
    <div className='data'>
                    <p>{curElem.username}</p>
                    <p>{curElem.email}</p>
                    <p>{curElem.phone}</p>
                    <p>{curElem.password}</p>
                    </div>
            )
 })
}
         </div>
    </div>
  )
  }


export default Multipleinputs
