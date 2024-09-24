
function sendNotification(email) {
    if(!email.includes('@')){
            console.log('Invalid Email');
    }else{
        let username = email.split("@")[0];
        let domain = email.split("@")[1];
        return username + " sent you an email from " + domain + "";
    }
    
}


