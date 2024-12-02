/*
Template Name: Steex - Admin & Dashboard Template
Author: raymond
Website: https://raymond.com/
Contact: raymond@gmail.com
File: real estate agent add property Init Js File
*/

// Dropzone
var dropzonePreviewNode = document.querySelector("#property-preview-list");
dropzonePreviewNode.id = "";
if (dropzonePreviewNode) {
    var previewTemplate = dropzonePreviewNode.parentNode.innerHTML;
    dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode);
    var dropzone = new Dropzone(".property-dropzone", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate,
        previewsContainer: "#property-preview",
    });
}