function volume_sphere(event) {
  if (event) {
    event.preventDefault(); // Prevent form submission
  }

  const radiusInput = document.getElementById("radius");
  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  const pi = Math.PI;
  const volume = (4 / 3) * pi * Math.pow(radius, 3);

  document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;