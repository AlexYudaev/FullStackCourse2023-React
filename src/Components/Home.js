const Home = () => {

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <form className="form">
                <input type="text" placeholder="Usename"  /><br />
                <input type="text" placeholder="Password" /><br />
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    );

}

export default Home
