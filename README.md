# Owino_live
Owino Live streaming platform
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up - Owino Live</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #09090f;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      width: 100%;
      max-width: 420px;
      background: #151520;
      padding: 30px;
      border-radius: 15px;
      border: 1px solid #292936;
    }

    .logo {
      text-align: center;
      color: #ff3b81;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    h1 {
      text-align: center;
      margin-bottom: 25px;
    }

    label {
      display: block;
      margin-top: 15px;
      margin-bottom: 7px;
    }

    input {
      width: 100%;
      padding: 13px;
      border-radius: 8px;
      border: 1px solid #333344;
      background: #0d0d15;
      color: white;
      font-size: 16px;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 14px;
      border: none;
      border-radius: 8px;
      background: #ff3b81;
      color: white;
      font-size: 17px;
      cursor: pointer;
    }

    .login {
      text-align: center;
      margin-top: 20px;
      color: #aaa;
    }

    a {
      color: #ff3b81;
      text-decoration: none;
    }
  </style>
</head>

<body>

  <div class="container">

    <div class="logo">Owino Live</div>

    <h1>Create Account</h1>

    <form>

      <label>Username</label>
      <input type="text" placeholder="Choose a username" required>

      <label>Email</label>
      <input type="email" placeholder="Enter your email" required>

      <label>Password</label>
      <input type="password" placeholder="Create a password" required>

      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm your password" required>

      <button type="submit">Create Account</button>

    </form>

    <div class="login">
      Already have an account?
      <a href="login.html">Log In</a>
    </div>

  </div>

</body>
</html>
