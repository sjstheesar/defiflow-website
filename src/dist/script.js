

const firebaseConfig = {
    apiKey: "AIzaSyBws1jQO9PdvIlbcjCIrxfCTwukQESyeFk",
    authDomain: "defiflow-email.firebaseapp.com",
    projectId: "defiflow-email",
    storageBucket: "defiflow-email.appspot.com",
    messagingSenderId: "161262543332",
    appId: "1:161262543332:web:741cc19cb6ad012217a7f1",
    measurementId: "G-EW787941ME"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var db = firebase.firestore();
const subscribers = db.collection("subscribers");

document.getElementById("confirm").addEventListener("click", () => {
    document.getElementById("confirm").classList.add("hidden")
})
document.getElementById("focusform").addEventListener("click", () => {
    document.getElementById("optin").scrollIntoView({behavior: "smooth"});
})

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    fname = document.getElementById("fname").value
    femail = document.getElementById("femail").value
    fphone = document.getElementById("fphone").value

    if (fname != '' && femail != '' && fphone != '') {
        
        subscribers.doc().set({
            name: fname,
            email: femail,
            phone: fphone
        })
            .then(() => {
                document.getElementById("fname").value = ''
                document.getElementById("femail").value = ''
                document.getElementById("fphone").value = ''
                var element = document.getElementById("confirm");
                element.classList.remove("hidden");

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    } else {
        var element1 = document.getElementById("vmessage").innerHTML = "Ohh no!! you left it blank. Please try again";
    }
});