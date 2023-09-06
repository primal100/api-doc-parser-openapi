import handleJson from "./handleJson.js";
import parsedJsonReplacer from "../utils/parsedJsonReplacer.js";
import type { OpenAPIV3 } from "openapi-types";

const openApi3Definition: OpenAPIV3.Document = {
  openapi: "3.1.0",
  info: {
    title: "Clickbait Killer",
    version: "0.1.0",
  },
  paths: {
    "/admin/api/categories/": {
      get: {
        summary: "List Categories View",
        operationId: "list_categories_view_admin_api_categories__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  items: {
                    $ref: "#/components/schemas/Category",
                  },
                  type: "array",
                  title:
                    "Response List Categories View Admin Api Categories  Get",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      post: {
        summary: "Add Category View",
        operationId: "add_category_view_admin_api_categories__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CategoryIn",
              },
            },
          },
          required: true,
        },
        responses: {
          "201": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Category",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
    },
    "/admin/api/categories/{id}/": {
      get: {
        summary: "Get Category View",
        operationId: "get_category_view_admin_api_categories__id___get",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Category",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      put: {
        summary: "Modify Category View",
        operationId: "modify_category_view_admin_api_categories__id___put",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CategoryIn",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Category",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      delete: {
        summary: "Delete Category View",
        operationId: "delete_category_view_admin_api_categories__id___delete",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        responses: {
          "204": {
            description: "Successful Response",
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
    },
    "/admin/api/sources/": {
      post: {
        summary: "Add Source View",
        operationId: "add_source_view_admin_api_sources__post",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SourceIn",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SourceOut",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      get: {
        summary: "List Sources View",
        operationId: "list_sources_view_admin_api_sources__get",
        parameters: [
          {
            name: "category_id",
            in: "query",
            required: false,
            schema: {
              anyOf: [
                {
                  type: "integer",
                },
                /*{
                  type: "null",
                },*/
              ],
              title: "Category Id",
            },
          },
          {
            name: "active",
            in: "query",
            required: false,
            schema: {
              anyOf: [
                {
                  type: "boolean",
                },
                /*{
                  type: "null",
                },*/
              ],
              title: "Active",
            },
          },
          {
            name: "created__gte",
            in: "query",
            required: false,
            schema: {
              anyOf: [
                {
                  type: "string",
                  format: "date-time",
                },
                /*{
                  type: "null",
                },*/
              ],
              title: "Created  Gte",
            },
          },
          {
            name: "created__lte",
            in: "query",
            required: false,
            schema: {
              anyOf: [
                {
                  type: "string",
                  format: "date-time",
                },
                /*{
                  type: "null",
                },*/
              ],
              title: "Created  Lte",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/SourceOut",
                  },
                  title: "Response List Sources View Admin Api Sources  Get",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
    },
    "/admin/api/sources/{id}/": {
      get: {
        summary: "Get Source View",
        operationId: "get_source_view_admin_api_sources__id___get",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SourceOut",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      put: {
        summary: "Modify Source View",
        operationId: "modify_source_view_admin_api_sources__id___put",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SourceIn",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SourceOut",
                },
              },
            },
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
      delete: {
        summary: "Delete Source View",
        operationId: "delete_source_view_admin_api_sources__id___delete",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
              title: "Id",
            },
          },
        ],
        responses: {
          "204": {
            description: "Successful Response",
          },
          "401": {
            description: "Authorization failed",
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError",
                },
              },
            },
          },
        },
        security: [
          {
            "Bearer auth": [],
          },
        ],
      },
    },
  },
  components: {
    schemas: {
      Category: {
        properties: {
          id: {
            type: "integer",
            maximum: 2147483647,
            minimum: 1,
            title: "Id",
          },
          name: {
            type: "string",
            maxLength: 32,
            title: "Name",
          },
          created: {
            type: "string",
            format: "date-time",
            title: "Created",
            readOnly: true,
          },
        },
        additionalProperties: false,
        type: "object",
        required: ["id", "name", "created"],
        title: "Category",
      },
      CategoryIn: {
        properties: {
          name: {
            type: "string",
            maxLength: 32,
            title: "Name",
          },
        },
        additionalProperties: false,
        type: "object",
        required: ["name"],
        title: "CategoryIn",
      },
      DetailResponse: {
        properties: {
          detail: {
            type: "string",
            title: "Detail",
          },
        },
        type: "object",
        required: ["detail"],
        title: "DetailResponse",
      },
      HTTPValidationError: {
        properties: {
          detail: {
            items: {
              $ref: "#/components/schemas/ValidationError",
            },
            type: "array",
            title: "Detail",
          },
        },
        type: "object",
        title: "HTTPValidationError",
      },
      SourceIn: {
        properties: {
          url: {
            type: "string",
            title: "Url",
            maxLength: 255,
          },
          category_id: {
            type: "integer",
            title: "Category Id",
          },
          active: {
            type: "boolean",
            title: "Active",
          },
        },
        type: "object",
        required: ["url", "category_id", "active"],
        title: "SourceIn",
      },
      SourceOut: {
        properties: {
          id: {
            type: "integer",
            maximum: 2147483647,
            minimum: 1,
            title: "Id",
          },
          category: {
            allOf: [
              {
                $ref: "#/components/schemas/k34q7t",
              },
            ],
            title: "Category",
          },
          created: {
            type: "string",
            format: "date-time",
            title: "Created",
            readOnly: true,
          },
          url: {
            type: "string",
            maxLength: 255,
            title: "Url",
          },
          active: {
            anyOf: [
              {
                type: "boolean",
              },
              /*{
                type: "null",
              },*/
            ],
            title: "Active",
            default: true,
          },
        },
        additionalProperties: false,
        type: "object",
        required: ["id", "category", "created", "url"],
        title: "SourceOut",
      },
      ValidationError: {
        properties: {
          loc: {
            items: {
              anyOf: [
                {
                  type: "string",
                },
                {
                  type: "integer",
                },
              ],
            },
            type: "array",
            title: "Location",
          },
          msg: {
            type: "string",
            title: "Message",
          },
          type: {
            type: "string",
            title: "Error Type",
          },
        },
        type: "object",
        required: ["loc", "msg", "type"],
        title: "ValidationError",
      },
      aygj5j: {
        properties: {
          id: {
            type: "integer",
            maximum: 2147483647,
            minimum: 1,
            title: "Id",
          },
          created: {
            type: "string",
            format: "date-time",
            title: "Created",
            readOnly: true,
          },
          site: {
            type: "string",
            maxLength: 20,
            title: "Site",
          },
          page_id: {
            anyOf: [
              {
                type: "string",
                maxLength: 128,
              },
              /*{
                type: "null",
              },*/
            ],
            title: "Page Id",
            nullable: true,
          },
          active: {
            anyOf: [
              {
                type: "boolean",
              },
              /*{
                type: "null",
              },*/
            ],
            title: "Active",
            default: true,
          },
          articles: {
            items: {
              $ref: "#/components/schemas/pydantic__main__clickbaitkiller__models__Articles__leaf",
            },
            type: "array",
            title: "Articles",
          },
          posts: {
            items: {
              $ref: "#/components/schemas/pydantic__main__clickbaitkiller__models__Posts__leaf",
            },
            type: "array",
            title: "Posts",
          },
        },
        additionalProperties: false,
        type: "object",
        required: ["id", "created", "site", "page_id", "articles", "posts"],
        title: "PostEndpoints",
      },
      k34q7t: {
        properties: {
          id: {
            type: "integer",
            maximum: 2147483647,
            minimum: 1,
            title: "Id",
          },
          name: {
            type: "string",
            maxLength: 32,
            title: "Name",
          },
          created: {
            type: "string",
            format: "date-time",
            title: "Created",
            readOnly: true,
          },
          endpoints: {
            items: {
              $ref: "#/components/schemas/aygj5j",
            },
            type: "array",
            title: "Endpoints",
          },
        },
        additionalProperties: false,
        type: "object",
        required: ["id", "name", "created", "endpoints"],
        title: "Categories",
      },
    },
    securitySchemes: {
      "Bearer auth": {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description:
          "Enter: **'Bearer &lt;JWT&gt;'**, where JWT is the access token",
        //bearerFormat: "Bearer",
      },
    },
  },
};
const parsed = [
  {
    name: "categories",
    url: "http://localhost:3000/admin/api/categories/",
    id: null,
    title: "Category",
    fields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "name",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 32,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
    ],
    readableFields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "name",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 32,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
    ],
    writableFields: [
      {
        name: "name",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 32,
      },
    ],
    createFields: [
      {
        name: "name",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 32,
      },
    ],
    listFields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "name",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 32,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
    ],
    parameters: [],
    operations: [
      {
        name: "Get Category View",
        type: "show",
        method: "GET",
        deprecated: false,
      },
      {
        name: "Modify Category View",
        type: "edit",
        method: "PUT",
        deprecated: false,
      },
      {
        name: "Delete Category View",
        type: "delete",
        method: "DELETE",
        deprecated: false,
      },
      {
        name: "List Categories View",
        type: "list",
        method: "GET",
        deprecated: false,
      },
      {
        name: "Add Category View",
        type: "create",
        method: "POST",
        deprecated: false,
      },
    ],
  },
  {
    name: "sources",
    url: "http://localhost:3000/admin/api/sources/",
    id: null,
    title: "Source",
    fields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "category",
        id: null,
        range: null,
        type: "object",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: "Object Category",
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
      {
        name: "url",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 255,
      },
      {
        name: "active",
        id: null,
        range: null,
        type: "boolean",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: false,
        description: "",
      },
      {
        name: "category_id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: "Object Category",
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
    ],
    readableFields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "category",
        id: null,
        range: null,
        type: "object",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: "Object Category",
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
      {
        name: "url",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 255,
      },
      {
        name: "active",
        id: null,
        range: null,
        type: "boolean",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: false,
        description: "",
      },
    ],
    writableFields: [
      {
        name: "url",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 255,
      },
      {
        name: "category_id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: "Object Category",
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
      {
        name: "active",
        id: null,
        range: null,
        type: "boolean",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
    ],
    createFields: [
      {
        name: "url",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 255,
      },
      {
        name: "category_id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: "Object Category",
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
      {
        name: "active",
        id: null,
        range: null,
        type: "boolean",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
    ],
    listFields: [
      {
        name: "id",
        id: null,
        range: null,
        type: "integer",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        minimum: 1,
      },
      {
        name: "category",
        id: null,
        range: null,
        type: "object",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: "Object Category",
        nullable: false,
        required: true,
        description: "",
        maxCardinality: 1,
      },
      {
        name: "created",
        id: null,
        range: null,
        type: "dateTime",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
      },
      {
        name: "url",
        id: null,
        range: null,
        type: "string",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: true,
        description: "",
        maxLength: 255,
      },
      {
        name: "active",
        id: null,
        range: null,
        type: "boolean",
        arrayType: null,
        enum: null,
        reference: null,
        embedded: null,
        nullable: false,
        required: false,
        description: "",
      },
    ],
    parameters: [
      {
        variable: "category_id",
        range: "integer",
        required: false,
        description: "",
      },
      {
        variable: "active",
        range: "boolean",
        required: false,
        description: "",
      },
      {
        variable: "created__gte",
        range: "dateTime",
        required: false,
        description: "",
      },
      {
        variable: "created__lte",
        range: "dateTime",
        required: false,
        description: "",
      },
    ],
    operations: [
      {
        name: "Get Source View",
        type: "show",
        method: "GET",
        deprecated: false,
      },
      {
        name: "Modify Source View",
        type: "edit",
        method: "PUT",
        deprecated: false,
      },
      {
        name: "Delete Source View",
        type: "delete",
        method: "DELETE",
        deprecated: false,
      },
      {
        name: "List Sources View",
        type: "list",
        method: "GET",
        deprecated: false,
      },
      {
        name: "Add Source View",
        type: "create",
        method: "POST",
        deprecated: false,
      },
    ],
  },
];

test(`Parse OpenApi v3 Documentation from Json`, async () => {
  const toBeParsed = await handleJson(
    openApi3Definition,
    "http://localhost:3000"
  );

  expect(JSON.stringify(toBeParsed, parsedJsonReplacer)).toEqual(
    JSON.stringify(parsed, parsedJsonReplacer)
  );
});
