import {
	getStorage,
	ref,
	uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

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

// Create a root reference
function uploadImage(file) {
	// const file = document.querySelector("#photo").files[0];

	// Create a root reference
	const storage = getStorage(app);

	// Create a reference to 'mountains.jpg'
	const imageRef = ref(storage, "mountains.jpg");
	uploadBytes(imageRef, file)
		.then((snapshot) => {
			alert("Uploaded a blob or file!");
		})
		.catch((err) => console.log(err));
}

document.getElementById("uploadImage").addEventListener("click", (e) => {
	uploadImage(document.querySelector("#photo").files[0]);
});

const errorMsgElement = document.querySelector("span#errorMsg");

function createEvent() {
	const title = document.getElementById("event-title");
	const subtitle = document.getElementById("event-subtitle");
	const description = document.getElementById("event-description");
	const image = document.getElementById("event-image").files[0];

	try {
		uploadImage(image);
	} catch (err) {
		alert("Error Occured, please try later or contact Weblaunch")
		console.log(err)
	}


}

document.getElementById("upload-event").addEventListener("click", (e) => createEvent(e))

function updateEvent() { }

function deleteEvent() { }

function getEvents() { }
