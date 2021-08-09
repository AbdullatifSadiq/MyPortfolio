const validate = (fullName, email, message) => {
    return {
        fullName: fullName === 0,
        email: email.length === 0,
        message: message.length === 0
    };
}


export { validate };