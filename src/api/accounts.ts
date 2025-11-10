import axios from "axios";
const url = "https://immaculearnapi-template-production.up.railway.app/v1"

export const login = async () => {
    try {
        const result = await axios.get(`${url}`,
            {
                headers: {
                    apikey: "immaculearn_apikey",
                    // token: `
                    //     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                    //     .eyJlbWFpbCI6IndpbHNvbmVzbWFiZTIwMDNAZ21haWwuY29tIiwiYWNjb3VudF9pZCI6MSwiaWF0IjoxNzYyNzY5MzE2LCJleHAiOjE3NzA1NDUzMTZ9
                    //     .F0_VJ6ur7wEmMKdeQ7cQ3Vyb_fkaa4lsxEZi42KqkiQ
                    // `
                }
            }
        )
        return result.data
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}