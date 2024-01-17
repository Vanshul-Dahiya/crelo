import OrgControl from "./_components/org-control"

const OrganizationIdLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            {/* if url is pasted directly then change organization accordingly */}
            <OrgControl />
            {children}
        </ >
    )
}
export default OrganizationIdLayout