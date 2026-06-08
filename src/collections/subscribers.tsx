import { buildCollection, buildProperty } from "@firecms/core";

export const subscribersCollection = buildCollection({
    id: "subscribers",
    name: "Subscribers collection",
    description: "This is a collection with all **newsletter subscribers**",
    path: "subscribers",
    properties: {

        email: {
            name: "Email Address",
            dataType: "string",
            validation: { 
                required: true,
                unique: true
            }
        },
        addedOn: {
            name: "Sign Up Date",
            dataType: "date",
            autoValue: "on_create" // Automatically saves the exact time they signed up
        },
        status: {
            name: "Status",
            dataType: "string",
            enumValues: {
                active: "Active",
                unsubscribed: "Unsubscribed"
            },
            defaultValue: "active" // Defaults to active when a new doc is created
        }
        
    }
});
