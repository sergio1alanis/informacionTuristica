<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = ""; // Por defecto, XAMPP no tiene contraseña
$dbname = "comentarios_borda"; // Reemplaza con el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario
$email = $_POST['email'];
$comment = $_POST['comment'];

// Preparar y ejecutar la consulta SQL
$sql = "INSERT INTO comments (email, comment) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $comment);

if ($stmt->execute()) {
    echo "Comment saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();

// Redireccionar de vuelta a la página principal
header("Location: index.html"); // Reemplaza con el nombre de tu página principal
exit();
?>