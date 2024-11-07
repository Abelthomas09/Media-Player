import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveVideoAPI - POST http rqst called Add Component

export const saveVideoAPI = async (videoDetails) => {
    return await commonAPI("POST", `${SERVERURL}/uploadVideos`, videoDetails)
}

// getAllVideosAPI - GET http rqst called view component when component displayed in browser inside its useeffect hook

export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/uploadVideos`, {})
}

//saveHistoryAPI - POST http rqst to http://localhost:3000/history called by video component when we paly vedeo
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST", `${SERVERURL}/history`, historyDetails)
}

// getAllHistoryAPI - GET http rqst to http://localhost:3000/history called History component when it open in browser.

export const getAllHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/history`, {})
}

// deleteHistoryAPI - DELETE http rqst to http://localhost:3000/history/id called by History component when user clicks on delete button=.

export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/history/${id}`, {})
}

// removeVideoAPI - DELETE http rqst to http://localhost:3000/history/id called by vedioCard component when user clicks on delete button=.

export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/uploadVideos/${id}`, {})
}

// saveCategoryAPI - POST http rqst to http://localhost:3000/categories called category Component when user clicks on add button.
// categoryDetails = { categoryName, allVideos }
export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVERURL}/categories`, categoryDetails)
}

// getAllCategoryAPI - GET http rqst to http://localhost:3000/categories called category Component when when component loaded in the browser.

export const getAllCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/categories`, {})
}

// deleteCategoryAPI - DELETE http rqst to http://localhost:3000/categories/id called by category component when user clicks on delete button.

export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/categories/${id}`, {})
}

// updateCategoryAPI - PUT http rqst to http://localhost:3000/categories/id called by category component when user drop video over the category.

export const updateCategoryAPI = async (categoryDetails) => {
    return await commonAPI("PUT", `${SERVERURL}/categories/${categoryDetails.id}`, categoryDetails)
}