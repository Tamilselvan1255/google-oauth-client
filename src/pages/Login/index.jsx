import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};

	const facebookAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/facebook`,
            "_self"
        );
    };

	return (
		<div className={styles.container}>
            <h1 className={styles.heading}>Authentication</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    {/* Your existing image or UI elements */}
                    <img className={styles.img} src="./images/login.jpg" alt="login" />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Authentication Methods</h2>
                    {/* Your existing login form or UI elements */}
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="./images/google.png" alt="google icon" />
                        <span>Sign in with Google</span>
                    </button>
                    <button className={styles.facebook_btn} onClick={facebookAuth}>
                        <img src="./images/facebook.png" alt="facebook icon" />
                        <span>Sign in with Facebook</span>
                    </button>
                    {/* Other UI elements or links */}
                    <p className={styles.text}>
                        New Here? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
	);
}

export default Login;