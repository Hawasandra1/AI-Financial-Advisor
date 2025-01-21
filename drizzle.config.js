import 'dotenv/config';

export default {
    dialect: 'postgresql',
    schema: './utils/schema.jsx',
    out: './drizzle',
    dbCredentials: {
        url: "postgresql://finance_owner:JBfNI9zK5ohL@ep-lucky-resonance-a5ejvavj.us-east-2.aws.neon.tech/finance?sslmode=require",
        connectionString: "postgresql://finance_owner:JBfNI9zK5ohL@ep-lucky-resonance-a5ejvavj.us-east-2.aws.neon.tech/finance?sslmode=require"
    },
};

