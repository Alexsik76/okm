async function get_log() {
    const response = await fetch("./access.log");
    const data  = await response.text();
    document.getElementById("logs").innerHTML=data
  }
get_log()
  
 