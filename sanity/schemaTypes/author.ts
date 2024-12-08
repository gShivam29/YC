import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType( schemaDefinition: {
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField(schemaField: {
            name: 'id',
            type: 'number',
        }),
        defineField(schemaField: {
            name: 'name',
            type: 'string',
        }),
        defineField(schemaField: {
            name: 'username',
            type: 'string',
        }),
        defineField(schemaField: {
            name: 'email',
            type: 'string',
        }),
        defineField(schemaField: {
            name: 'image',
            type: 'url',
        }),
        defineField(schemaField: {
            name: 'bio',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
})