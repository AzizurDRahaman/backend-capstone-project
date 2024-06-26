export const register = async(data)=>{
    try {
        const response = await fetch("http://localhost:3000/api/auth/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    } catch (error) {
        return error;
    }
}

export const login = async(data)=>{
    try {
        const response = await fetch("http://localhost:3000/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    } catch (error) {
        return error;
    }
}