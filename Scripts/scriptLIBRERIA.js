function selectBook(imagenSrc, titulo, descripcion, enlace) {
    document.getElementById("book-cover-large").querySelector("img").src = imagenSrc;
    document.getElementById("book-title").innerText = titulo;
    document.getElementById("book-description").innerText = descripcion;


    const readBookButton = document.getElementById("read-book-button");
    readBookButton.href = enlace;  
    readBookButton.style.display = "inline-block";
}
