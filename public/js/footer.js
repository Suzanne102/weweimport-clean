fetch("../templates/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("placeholder-footer").innerHTML = data;
  })
  .catch(err => console.error("Failed to load footer:", err));