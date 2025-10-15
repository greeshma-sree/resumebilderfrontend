import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

// add resume -post - steps component



export const addResumeAPI = async (reqBody) => {
    return await commonAPI("POST", `${BASEURL}/all-resume`, reqBody)
}

// get a resume

export const getAResumeAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/all-resume/${id}`, {})
}

//edit a resume
export const UpdateAResumeAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `${BASEURL}/all-resume/${id}`, reqBody)
}

//get all resumes
export const getAllResumeAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/all-resume`)
}


//delete a resume

export const deleteResumeAPI = async (id) => {
    return await commonAPI("DELETE", `${BASEURL}/all-resume/${id}`)
}