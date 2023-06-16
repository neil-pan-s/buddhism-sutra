export async function injectScript(src, cb, el) { 
  return new Promise((resolve, reject) => {
    var e = document.createElement('script'); 
    e.type = 'text/javascript'; 
    e.src = src; 
    e.onload = () => { 
      resolve() 
      cb && cb()
    }
    e.onerror = (e) => {
      reject(e)
    }
    (el || document.body).appendChild(e) 
  })
}