// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyAHR67C4H_51mUc1QdAztY1uLBzRlh4Pcs",
	authDomain: "spoorthy-6b2ed.firebaseapp.com",
	databaseURL:
		"https://spoorthy-6b2ed-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "spoorthy-6b2ed",
	storageBucket: "spoorthy-6b2ed.appspot.com",
	messagingSenderId: "979856160395",
	appId: "1:979856160395:web:15adf3ca62249740d6868e",
	measurementId: "G-06RM8H1B7S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let email = "";
let password = "";
document.getElementById("admin-login-email").addEventListener("keyup", (e) => {
	email = e.target.value;
});

document.getElementById("admin-login-password").addEventListener(
	"keyup",
	(e) => {
		password = e.target.value;
	}
);

function InitiateLogin(e) {
	e.preventDefault();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert("welcome admin");
			window.location.href = "/adminupload.html";
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			document.getElementById(
				"login-error-message"
			).innerHTML = `<h1>${errorMessage}</h1>`;
		});
}

document.getElementById("admin-login-form").addEventListener("submit", (e) =>
	InitiateLogin(e)
);

onAuthStateChanged(auth, (user) => {
	if (user) {
		const uid = user.uid;
		console.log(uid);
		window.location.href = "/adminupload.html";
		// ...
	} else {
		// User is signed out
		// ...
		window.location.href = "/admin.html";
	}
});

// document.getElementById("admin-sign-out").addEventListener("click", (e) => {
// 	signOut(auth)
// 		.then(() => {
// 			// Sign-out successful.
// 			window.location.href = "/admin.html";
// 		})
// 		.catch((error) => {
// 			// An error happened.
// 			alert("Some error occured, please refresh");
// 		});
// });
