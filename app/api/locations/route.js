import { getLocations } from "./locationUtil";

export async function GET(){
    const locationData = getLocations();

    return Response.json(locationData);
}