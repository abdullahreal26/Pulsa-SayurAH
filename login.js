
    function togglePassword(id, el) {
  const input = document.getElementById(id);
  const icon = el.querySelector('img');
  
  if (input.type === 'password') {
    input.type = 'text';
    icon.src = 'https://cdn-icons-png.freepik.com/256/795/795831.png?ga=GA1.1.1685911560.1744159551&semt=ais_hybrid';
    icon.alt = 'Sembunyikan Password';
  } else {
    input.type = 'password';
    icon.src = 'https://cdn-icons-png.freepik.com/256/16514/16514494.png?ga=GA1.1.1685911560.1744159551&semt=ais_hybrid';
    icon.alt = 'Lihat Password';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-form');
  const password = document.getElementById('password');
  const repassword = document.getElementById('repassword');
  
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Password tidak cocok!';
  errorMessage.style.color = 'red';
  errorMessage.style.fontSize = '0.85rem';
  errorMessage.style.marginTop = '5px';
  errorMessage.style.display = 'none';
  repassword.parentNode.appendChild(errorMessage);
  
  form.addEventListener('submit', function(e) {
    if (password.value !== repassword.value) {
      e.preventDefault();
      errorMessage.style.display = 'block';
      repassword.focus();
    } else {
      errorMessage.style.display = 'none';
    }
  });
});
