

export const fetchTest = async () => {
    const response = await fetch('/api/postTest/receive');
    if(!response.ok){
        throw new Error('Failed to Fetch Testimonies');
    }
    const quietTime = await response.json();
    return quietTime
}