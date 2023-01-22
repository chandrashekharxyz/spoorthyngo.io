import {
	getStorage,
	ref,
	uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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
const db = getFirestore(app);
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
			console.log(snapshot)
			return snapshot.name;
		})
		.catch((err) => console.log(err));

	// Add a new document with a generated id.
}

document.getElementById("uploadImage").addEventListener("click", (e) => {
	uploadImage(document.querySelector("#photo").files[0]);
});

const errorMsgElement = document.querySelector("span#errorMsg");

let title = "";
let subtitle = "";
let description = "";
let titleItem = document.getElementById("event-title");
let subtitleItem = document.getElementById("event-subtitle");
let descriptionItem = document.getElementById("event-description");
let image = document.getElementById("event-image").files[0];

titleItem.addEventListener("keypress", (e) => { title = e.target.value })
subtitleItem.addEventListener("keypress", (e) => { subtitle = e.target.value })
descriptionItem.addEventListener("keypress", (e) => { description = e.target.value })
async function createEvent() {
	// Create a root reference
	const storage = getStorage(app);

	// Create a reference to 'mountains.jpg'
	const imageRef = ref(storage, "mountains.jpg");
	uploadBytes(imageRef, image)
		.then(async (snapshot) => {
			alert("Uploaded a blob or file!");
			console.log(snapshot)
			const docRef = await addDoc(collection(db, "events"), {
				title: title,
				subtitle: subtitle,
				description: description,
				image: snapshot.ref.fullPath
			})
				.catch((err) => console.log(err));
			console.log("Document written with ID: ", docRef.id);
		});
}

document.getElementById("upload-event").addEventListener("click", (e) => createEvent(e))

function updateEvent() { }

function deleteEvent() { }

function getEvents() { }
