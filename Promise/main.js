const myPromise = new Promise((resolve, reject) => {

  if(''){
    resolve('Success')
  } else{
    reject(err => console.error(err))
  }
})

myPromise.then(response => {
  if( response.ok) {
    return response
  }else {
    throw new Error('Somthing going wrong')
  }
}).then(res => res.data.json()).catch(err => console.error(err))