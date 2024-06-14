// // let myPromise = new Promise(()) => {
    
// // })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let marks = 100;
//         if (marks >= 100) {
//             resolve("A+")
//         } else {
//             reject("faild")
//         }
//     }, 2000);
// })
// promise.then((grade) => {
//     console.log(grade);
//     return "Treat"
// }).catch((error)=>{
//     console.log(error);
// });



// let login = (email,passwwerd) =>{
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(email)
//     }, 2000);
// })
// }
// login("rimsha@.com",1234)
// .then((email)=>{
//     console.log(email);
    
// }).catch((error)=>{
//     console.log("data reject");
    
// })




// let login = (email,passwwerd) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            if (email === "rimsha@.com" && passwwer===1234){
//                resolve(email)
//            } else {
//             reject("wrong email or passward")
//            }
//         }, 2000);
//        })
//     }
//     login("rimsha@.com",1234)
//     .then((email)=>{
//         console.log(email);
        
//     }).catch((error)=>{
//         console.log(" reject login",error);
        
//     })




let login = (email,passwwerd) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (email === "rimsha@.com" && passwwerd ===1234) {
               resolve(email)
           } else {
            reject("wrong email or passward")
           }
        }, 2000);
       })
    }
    let getsVideos =(email) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email) {
                    resolve(["video1","video2","video3"])
                } else {
                    reject("email not found")
                }
            }, 2000);
        })
    }

login("rimsha@.com",1234)
.then((email)=>{
    console.log(email);
        return getsVideos(email)

}).then((videos)=>{
    console.log(videos);
    
}).catch((error)=>{

    console.log(" reject login",error);
    
})