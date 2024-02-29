function sendForm(){
    let date = Date();
    let nama = document.forms['messages-us-form']['name'];
    let tanggallahir = document.forms['messages-us-form']['tanggal-lahir'];
    let jeniskelamin = document.forms['messages-us-form']['jenis-kelamin'];
    let pesan = document.forms['messages-us-forms']['pesan'];   
}
document.getElementById('current-time').innerHTML = date;
document.getElementById('name').innerHTML = nama;