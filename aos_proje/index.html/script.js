// Giriş Yap Butonuna Basılınca
function girisYap(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller
    
    // Kullanıcı adı veya şifre kontrolü yapmıyoruz,
    // direkt giriş başarılı gibi davranıyoruz.

    // 1. Giriş ekranını gizle
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.display = 'none';
    
    // 2. Dashboard ekranını aç
    const dashboardScreen = document.getElementById('dashboard-screen');
    // Flex yapısını bozmamak için 'flex' olarak açıyoruz
    dashboardScreen.style.display = 'flex';
}

// Çıkış Yap Butonuna Basılınca
function cikisYap() {
    // 1. Dashboard ekranını gizle
    const dashboardScreen = document.getElementById('dashboard-screen');
    dashboardScreen.style.display = 'none';
    
    // 2. Giriş ekranını geri getir
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.display = 'flex';
    
    // Formu temizle (Opsiyonel)
    document.querySelector('form').reset();
}