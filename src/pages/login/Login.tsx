import { Mail, Lock, Key } from "lucide-react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../../toolkits/auth/firebase";

const Login=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error(err)
    }
  };

  const printUser=()=>{
    console.log(auth.currentUser)
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <form onSubmit={handleEmailLogin}>
        <div className="input-group">
          <Mail size={18} />
          <input
            className="w-full p-2 outline-none"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <Lock size={18} />
          <input
            className="w-full p-2 outline-none"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Login with Email</button>
      </form>

      <div className="divider">OR</div>

      <button className="btn btn-social btn-google" onClick={handleGoogleLogin}>
        <Key size={18} />
        Login with Google
      </button>
      <button className="btn btn-social btn-facebook" onClick={printUser}>
        <Key size={18} />
        print user
      </button>
    </div>
  );
}

export default Login;