import { startCase } from "lodash"
import { auth } from "@clerk/nextjs"
import OrgControl from "./_components/org-control"

export async function generateMetaData() {
    const { orgSlug } = auth()
    return {
        title: startCase(orgSlug || "organization"),
    }
}

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