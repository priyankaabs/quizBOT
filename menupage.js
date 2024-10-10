function logout() {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
        window.location.href = "homepage.html"; // Redirect to homepage
    }
}