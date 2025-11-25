// small helper script (currently small). You can expand to add dynamic behaviour.
document.addEventListener('DOMContentLoaded', () => {
  // if profile-photo missing, show a placeholder circle background
  const img = document.getElementById('profile-photo');
  img.onerror = () => {
    img.style.background = '#fff';
    img.style.display = 'inline-block';
    img.style.width = '56px';
    img.style.height = '56px';
    img.style.borderRadius = '50%';
    img.style.backgroundColor = '#c7d2fe';
    img.alt = 'Add your photo (file: your-photo.jpg)';
    img.src = ''; // remove broken source
  };
});
