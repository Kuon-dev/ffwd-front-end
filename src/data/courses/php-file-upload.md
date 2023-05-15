# PHP File Upload

Uploading files in PHP allows users to submit files from their local machines to a web server. This functionality is commonly used in applications that involve file sharing, document management, or media uploads. Let's explore how to implement file upload in PHP.

## HTML File Upload Form

To enable file uploads, you need to create an HTML form with an input element of type "file". This form will allow users to select and submit files from their devices.

``````html
<form action="upload.php" method="post" enctype="multipart/form-data">
  <input type="file" name="fileToUpload">
  <input type="submit" value="Upload">
</form>
``````

In this example, we create an HTML form with the following attributes:
- `action` specifies the target PHP file that will process the uploaded file.
- `method` defines the HTTP method to use (in this case, POST).
- `enctype` specifies the encoding type as "multipart/form-data", which is required for file uploads.
- The input element of type "file" with the name "fileToUpload" allows users to select a file from their device.
- The submit button triggers the form submission.

## PHP File Upload Handling

After the user submits the form, you need to handle the file upload in a PHP script. Here's an example of how to handle file upload in PHP:

``````php
<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if file already exists
if (file_exists($targetFile)) {
    echo "File already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "File is too large.";
    $uploadOk = 0;
}

// Allow only specific file formats
$allowedExtensions = array("jpg", "png", "gif");
if (!in_array($imageFileType, $allowedExtensions)) {
    echo "Only JPG, PNG, and GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "File was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
        echo "File has been uploaded successfully.";
    } else {
        echo "Error uploading file.";
    }
}
?>
``````

In this PHP script, we perform the following steps:
1. Specify the target directory where the uploaded file will be stored (e.g., "uploads/").
2. Construct the target file path by concatenating the target directory with the basename of the uploaded file.
3. Set the initial value of `$uploadOk` to 1, indicating that the file upload is allowed unless an error occurs.
4. Extract the file extension from the target file path to determine the file type.
5. Check if the file already exists in the target directory. If it does, set `$uploadOk` to 0.
6. Check if the file size exceeds the maximum allowed size. If it does, set `$uploadOk` to 0.
7. Check if the file extension is allowed. If it's not in the list of allowed extensions, set `$uploadOk` to 0.
8. If `$uploadOk` is still 1, move the uploaded file from
