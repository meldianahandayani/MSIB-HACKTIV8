// Load data from localStorage when the page loads
window.onload = function() {
    if (localStorage.getItem('profileData')) {
      const data = JSON.parse(localStorage.getItem('profileData'));
      document.getElementById("nama").textContent = data.nama;
      document.getElementById("role").textContent = data.role;
      document.getElementById("availibility").textContent = data.availibility;
      document.getElementById("usia").textContent = data.usia;
      document.getElementById("lokasi").textContent = data.lokasi;
      document.getElementById("pengalaman").textContent = data.pengalaman;
      document.getElementById("email").textContent = data.email;
    }
  }
  function handleEdit() {
    // Hide the profile section
    document.getElementById("section-profile").style.display = "none"; 
    // Show the form section
    document.getElementById("section-form").style.display = "";
    // Get values from the profile section
    document.getElementById("form-nama").value = document.getElementById("nama").textContent;
    document.getElementById("form-role").value = document.getElementById("role").textContent;
    document.getElementById("form-availibility").value = document.getElementById("availibility").textContent;
    document.getElementById("form-usia").value = document.getElementById("usia").textContent;
    document.getElementById("form-lokasi").value = document.getElementById("lokasi").textContent;
    document.getElementById("form-pengalaman").value = document.getElementById("pengalaman").textContent;
    document.getElementById("form-email").value = document.getElementById("email").textContent;
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Get values from the form
    const profileData = {
      nama: document.getElementById("form-nama").value,
      role: document.getElementById("form-role").value,
      availibility: document.getElementById("form-availibility").value,
      usia: document.getElementById("form-usia").value,
      lokasi: document.getElementById("form-lokasi").value,
      pengalaman: document.getElementById("form-pengalaman").value,
      email: document.getElementById("form-email").value
    };
    // Update profile section with new values
    document.getElementById("nama").textContent = profileData.nama;
    document.getElementById("role").textContent = profileData.role;
    document.getElementById("availibility").textContent = profileData.availibility;
    document.getElementById("usia").textContent = profileData.usia;
    document.getElementById("lokasi").textContent = profileData.lokasi;
    document.getElementById("pengalaman").textContent = profileData.pengalaman;
    document.getElementById("email").textContent = profileData.email;
    // Store the data in localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    // Hide the form section
    document.getElementById("section-form").style.display = "none";
    // Show the profile section
    document.getElementById("section-profile").style.display = "";
  }
  