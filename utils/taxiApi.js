export async function getTaxiData(){
    let data = await fetch("https://api.data.gov.sg/v1/transport/taxi-availability").then(r => r.json())
    return data
}