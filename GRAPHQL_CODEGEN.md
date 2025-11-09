# GraphQL Code Generation Setup

This project uses GraphQL Code Generator to automatically generate TypeScript types from your Contentful GraphQL schema.

## Setup

1. **Install dependencies** (already done):
   ```bash
   pnpm install
   ```

2. **Generate types**:
   ```bash
   pnpm codegen
   ```

3. **Watch mode** (regenerates on file changes):
   ```bash
   pnpm codegen:watch
   ```

## How It Works

1. **GraphQL Queries**: Place your `.graphql` query files in `graphql/queries/`
   - Example: `graphql/queries/mainPage.graphql`

2. **Code Generation**: Running `pnpm codegen` will:
   - Fetch the schema from Contentful
   - Generate TypeScript types in `lib/generated/graphql.ts`
   - Generate schema introspection in `lib/generated/schema.json`

3. **Using Generated Types**: Import types and queries from `lib/generated/graphql.ts`:
   ```typescript
   import { GetMainPageQuery, GetMainPage } from "./generated/graphql";
   ```

## Adding New Queries

1. Create a new `.graphql` file in `graphql/queries/`
2. Write your query:
   ```graphql
   query GetMyData {
     myContentTypeCollection {
       items {
         field1
         field2
       }
     }
   }
   ```
3. Run `pnpm codegen` to generate types
4. Import and use in your code:
   ```typescript
   import { GetMyDataQuery, GetMyData } from "./generated/graphql";
   ```

## Configuration

The codegen configuration is in `codegen.ts`. It:
- Fetches schema from your Contentful space
- Generates TypeScript types with proper nullability
- Keeps Contentful's naming conventions

## Benefits

✅ **Type Safety**: Full TypeScript types for all queries and responses  
✅ **Auto-completion**: IDE support for all fields  
✅ **Schema Validation**: Queries are validated against your Contentful schema  
✅ **No Manual Types**: Types are automatically generated from your schema  
✅ **Refactoring Safe**: Changes to schema automatically update types  

## Troubleshooting

If codegen fails:
1. Check that your Contentful credentials in `codegen.ts` are correct
2. Verify the query syntax matches your Contentful schema
3. Check the error messages - they'll tell you which fields don't exist

