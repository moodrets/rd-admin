/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('pages', (table) => {
        table.increments().primary().notNullable();
        table.text('page_title', 1000);
        table.text('page_description');
        table.string('path', 1000);
        table.string('redirect', 1000);
        table.string('title', 1000);
        table.text('content');
        table.string('layout_filename').defaultTo('default');
        table.text('scripts');
        table.text('styles');
        table.boolean('hidden').defaultTo(false);
        table.timestamps(true, true);
    });
    await knex.schema.createTable('menus', (table) => {
        table.increments().primary().notNullable();
        table.string('title', 1000);
        table.string('name', 1000);
        table.boolean('global').defaultTo(false);
        table.boolean('hidden').defaultTo(false);
        table.timestamps(true, true);
    });
    await knex.schema.createTable('pages_menus', (table) => {
        table.increments().primary();
        table.integer('menu_id').unsigned().references('menus.id');
        table.integer('page_id').unsigned().references('pages.id');
        table.timestamps(true, true);
    });
    return true;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('pages');
    await knex.schema.dropTableIfExists('menus');
    await knex.schema.dropTableIfExists('pages_menus');
    return true;
};
