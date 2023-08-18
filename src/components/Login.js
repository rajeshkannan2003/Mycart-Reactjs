
export default function Login(){
    return(
        <div className="container"> 
        <form action="" id="form">
            <h1>Register</h1>
            <div className="input-group">
                <label for="username">username</label>
                <input type="text" id="username" name="username"/>
                <div class="error"></div>
            </div>
            <div className="input-group">
                <label for="emaill">email id</label>
                <input type="text" id="email" name="email"/>
                <div className="error"></div>
            </div>
            <div className="input-group">
                <label for="password">password</label>
                <input type="text" id="password" name="password" />
                <div className="error"></div>
            </div>
            <div className="input-group">
                <label for="cpassword">confirm password</label>
                <input type="text" id="cpassword" name="cpassword" />
                <div className="error"></div>
            </div>
            <div>
             <button className="btn btn-danger" type="button" onclick=" reg() ">register</button>
            </div>
            
            
            

            

        </form>
    </div>
    )
}
