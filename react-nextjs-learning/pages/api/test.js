export default async(req, res) => {
    const currentLocation =  req;
    console.log("location: " + currentLocation.body);
   
    return res.json({test:"test"})
}