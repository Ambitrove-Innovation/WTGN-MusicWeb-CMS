import { buildCollection, buildProperty } from "@firecms/core";

export const liveEvents = buildCollection({
    id: "liveEvents",
    name: "Live Events",
    description: "This is a collection with all upcoming and previous **live events**",
    path: "liveEvents",
    properties: {

        date: {
            name: "Date",
            dataType: "map",
            properties: {
                
                day: {
                    name: "Day",
                    dataType: "string",
                },

                month: {
                    name: "Month",
                    dataType: "string"
                },

            }
        },

        title: {
            name: "Title",
            dataType: "string",
        }, 

        desc: {
            name: "Description",
            dataType: "string",
        }, 

        location: {
            name: "Location",
            dataType: "string",
        }, 
        
    }
});
