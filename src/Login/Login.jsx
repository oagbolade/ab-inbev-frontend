import "../App.css";

function Login() {
    const handleSubmit = () => {
  // ... get data form
  // ... submit to API or something
    }
    
  return (
    <div>
      <div class="main-w3layouts wrapper">
        <h1>Login</h1>
        <div class="main-agileinfo">
          <div class="agileits-top">
            <form action="#" method="post">
              <input
                class="text email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                class="text"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <input onClick={handleSubmit} type="button" value="LOGIN" />
            </form>
          </div>
        </div>
        <ul class="colorlib-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
