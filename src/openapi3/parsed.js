const parsed = {
    "name": "summaries",
    "url": "http://localhost:8000/admin/api/summaries/",
    "id": null,
    "title": "Summary",
    "fields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "path",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "generated_with",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "slug",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "settled",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": true,
            "required": false,
            "description": ""
        },
        {
            "name": "user_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "users",
                "url": "http://localhost:8000/admin/api/users/",
                "id": null,
                "title": "User",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "parameters": [
                    {
                        "variable": "email",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "first_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "last_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "is_staff",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "active",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "search_str",
                        "range": null,
                        "required": false,
                        "description": ""
                    }
                ],
                "operations": [
                    {
                        "name": "Read User View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Update User View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Block User View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List User View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Create User View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "avg_rating",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "ratings_count",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        }
    ],
    "readableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "path",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "generated_with",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "slug",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "settled",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": true,
            "required": false,
            "description": ""
        },
        {
            "name": "user_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "users",
                "url": "http://localhost:8000/admin/api/users/",
                "id": null,
                "title": "User",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "parameters": [
                    {
                        "variable": "email",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "first_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "last_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "is_staff",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "active",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "search_str",
                        "range": null,
                        "required": false,
                        "description": ""
                    }
                ],
                "operations": [
                    {
                        "name": "Read User View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Update User View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Block User View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List User View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Create User View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "avg_rating",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "ratings_count",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        }
    ],
    "writableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "path",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "generated_with",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "slug",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "settled",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": true,
            "required": false,
            "description": ""
        },
        {
            "name": "user_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "users",
                "url": "http://localhost:8000/admin/api/users/",
                "id": null,
                "title": "User",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "date_joined",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "email",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "first_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "last_name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_staff",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "is_superuser",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "active",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "blocked",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": true,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "password",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    },
                    {
                        "name": "password_confirm",
                        "id": null,
                        "range": null,
                        "type": "password",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": false,
                        "description": ""
                    }
                ],
                "parameters": [
                    {
                        "variable": "email",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "first_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "last_name",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "date_joined__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "is_staff",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "active",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__gte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "blocked__lte",
                        "range": null,
                        "required": false,
                        "description": ""
                    },
                    {
                        "variable": "search_str",
                        "range": null,
                        "required": false,
                        "description": ""
                    }
                ],
                "operations": [
                    {
                        "name": "Read User View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Update User View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Block User View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List User View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Create User View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "avg_rating",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "ratings_count",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        }
    ],
    "parameters": [
        {
            "variable": "created__gte",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "created__lte",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "url",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "path",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "active",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "settled__gte",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "settled__lte",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "user_id",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "search_str",
            "range": null,
            "required": false,
            "description": ""
        }
    ],
    "operations": [
        {
            "name": "Read Summary View",
            "type": "show",
            "method": "GET",
            "deprecated": false
        },
        {
            "name": "List Summaries View",
            "type": "list",
            "method": "GET",
            "deprecated": false
        }
    ]
},{
    "name": "categories",
    "url": "http://localhost:8000/admin/api/categories/",
    "id": null,
    "title": "Category",
    "fields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "name",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        }
    ],
    "readableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "name",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        }
    ],
    "writableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "name",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        }
    ],
    "parameters": [],
    "operations": [
        {
            "name": "Get Category View",
            "type": "show",
            "method": "GET",
            "deprecated": false
        },
        {
            "name": "Modify Category View",
            "type": "edit",
            "method": "PUT",
            "deprecated": false
        },
        {
            "name": "Delete Category View",
            "type": "delete",
            "method": "DELETE",
            "deprecated": false
        },
        {
            "name": "List Categories View",
            "type": "list",
            "method": "GET",
            "deprecated": false
        },
        {
            "name": "Add Category View",
            "type": "create",
            "method": "POST",
            "deprecated": false
        }
    ]
},{
    "name": "sources",
    "url": "http://localhost:8000/admin/api/sources/",
    "id": null,
    "title": "Source",
    "fields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "category",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "category_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        }
    ],
    "readableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "category",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "created",
            "id": null,
            "range": null,
            "type": "dateTime",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "category_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        }
    ],
    "writableFields": [
        {
            "name": "id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "category",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        },
        {
            "name": "url",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": ""
        },
        {
            "name": "active",
            "id": null,
            "range": null,
            "type": "string",
            "arrayType": null,
            "enum": null,
            "reference": null,
            "embedded": null,
            "nullable": false,
            "required": false,
            "description": ""
        },
        {
            "name": "category_id",
            "id": null,
            "range": null,
            "type": "integer",
            "arrayType": null,
            "enum": null,
            "reference": {
                "name": "categories",
                "url": "http://localhost:8000/admin/api/categories/",
                "id": null,
                "title": "Category",
                "fields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "readableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "created",
                        "id": null,
                        "range": null,
                        "type": "dateTime",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "writableFields": [
                    {
                        "name": "id",
                        "id": null,
                        "range": null,
                        "type": "integer",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    },
                    {
                        "name": "name",
                        "id": null,
                        "range": null,
                        "type": "string",
                        "arrayType": null,
                        "enum": null,
                        "reference": null,
                        "embedded": null,
                        "nullable": false,
                        "required": true,
                        "description": ""
                    }
                ],
                "parameters": [],
                "operations": [
                    {
                        "name": "Get Category View",
                        "type": "show",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Modify Category View",
                        "type": "edit",
                        "method": "PUT",
                        "deprecated": false
                    },
                    {
                        "name": "Delete Category View",
                        "type": "delete",
                        "method": "DELETE",
                        "deprecated": false
                    },
                    {
                        "name": "List Categories View",
                        "type": "list",
                        "method": "GET",
                        "deprecated": false
                    },
                    {
                        "name": "Add Category View",
                        "type": "create",
                        "method": "POST",
                        "deprecated": false
                    }
                ]
            },
            "embedded": null,
            "nullable": false,
            "required": true,
            "description": "",
            "maxCardinality": 1
        }
    ],
    "parameters": [
        {
            "variable": "category_id",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "active",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "created__gte",
            "range": null,
            "required": false,
            "description": ""
        },
        {
            "variable": "created__lte",
            "range": null,
            "required": false,
            "description": ""
        }
    ],
    "operations": [
        {
            "name": "Get Source View",
            "type": "show",
            "method": "GET",
            "deprecated": false
        },
        {
            "name": "Modify Source View",
            "type": "edit",
            "method": "PUT",
            "deprecated": false
        },
        {
            "name": "Delete Source View",
            "type": "delete",
            "method": "DELETE",
            "deprecated": false
        },
        {
            "name": "List Sources View",
            "type": "list",
            "method": "GET",
            "deprecated": false
        },
        {
            "name": "Add Source View",
            "type": "create",
            "method": "POST",
            "deprecated": false
        }
    ]
};
