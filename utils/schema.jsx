import {
integer,numeric,pgTable,serial, varchar
} from 'drizzle-orm/pg-core'


// Budget Schema
export const Budget= pgTable ('budget', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(), 
    amount: varchar ('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})


//income schema
export const Income= pgTable ('income', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(), 
    amount: varchar ('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})

//expenses schema

export const Expense= pgTable ('expense', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(), 
    amount: varchar ('amount').notNull(),
    bugdetId: integer ('budgetId').references(() => Budget.id),
    createdBy: varchar('createdBy').notNull()
})
