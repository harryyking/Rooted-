

export const fetchStamp = async () => {
    const response = await fetch('api/postRecord/retrieve/');
    if(!response.ok){
        throw new Error('Failed to Fetch Products');
    }
    const quietTime = await response.json();
    return quietTime
}