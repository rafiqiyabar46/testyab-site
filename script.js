function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "yabar" && password === "password") {
        window.location.href = "welcome.html";  // Redirect to the new page
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
        document.getElementById("message").style.color = "red";
    }
}
