export default function() {
  const frameVar = document.getElementById('storybook-preview-iframe');
  frameVar.contentWindow.document.getElementById('link').style.color = "green";
  setTimeout(function(){ alert("Hello"); }, 3000);
}