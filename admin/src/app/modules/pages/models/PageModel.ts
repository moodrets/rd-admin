export interface PageInterface {
    id: string
    created_at: Date
    updated_at: Date
    title: string
    path: string
    redirect: string
    page_title: string
    page_description: string
    content: string
    layout_filename: string
    scripts: string
    styles: string
    hidden: boolean
}
