document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let errorMsg = "";

    // Validate name
    if (name === "") {
        errorMsg += "Name cannot be empty.<br>";
    }

    // Validate email format using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg += "Invalid email format.<br>";
    }

    // Validate password
    if (password.length < 6) {
        errorMsg += "Password must be at least 6 characters.<br>";
    }

    // Show errors
    document.getElementById("error").innerHTML = errorMsg;

    // If no errors, submit form
    if (errorMsg === "") {
        alert("Form submitted successfully!");
        this.submit();
    }
});